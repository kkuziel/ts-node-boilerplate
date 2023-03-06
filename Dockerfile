# BASE
FROM node:18-alpine AS base

RUN apk update && \
    apk upgrade && \
    apk add --no-cache tini

# DEPENDENCIES
FROM base AS dependencies

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN npm install --frozen-lockfile
RUN npm run build
RUN npm install --production --frozen-lockfile

# BUILD
FROM base AS build

WORKDIR /home/node/app

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

COPY --from=dependencies --chown=node:node /home/node/app/node_modules ./node_modules
COPY --from=dependencies --chown=node:node /home/node/app/package.json ./package.json
COPY --from=dependencies --chown=node:node /home/node/app/dist ./dist

USER node

ENTRYPOINT ["/sbin/tini", "--", "/usr/local/bin/node" ]
CMD ["dist/index.js"]
