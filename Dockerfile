# BASE
FROM node:18-alpine AS base

# DEPENDENCIES
FROM base AS dependencies

WORKDIR /home/node/app

COPY --chown=node:node . .

RUN yarn install --frozen-lockfile
RUN yarn build
RUN yarn install --production --frozen-lockfile

# BUILD
FROM base AS build

WORKDIR /home/node/app

ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

COPY --from=dependencies --chown=node:node /home/node/app/node_modules ./node_modules
COPY --from=dependencies --chown=node:node /home/node/app/dist ./dist

USER node

ENTRYPOINT ["/sbin/tini", "--", "/usr/local/bin/node" ]
CMD ["dist/index.js"]
