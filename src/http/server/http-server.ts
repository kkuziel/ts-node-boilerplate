import 'reflect-metadata';
import Server from './server';
import { Application, RequestHandler } from 'express';
import { Server as NativeServer } from 'http';
import { InversifyExpressServer } from 'inversify-express-utils';
import { interfaces, inject, injectable } from 'inversify';

import { Config } from '../../config/config';

import Types from '../../di/types';
import Logger from '../../application/logger';
import Provider from '../middleware/provider';

@injectable()
export default class HTTPServerImpl implements Server {
    private application: Application;

    private server?: NativeServer;

    constructor(
        @inject(Types.Config) private config: Config,
        @inject(Types.HTTP.Middleware.Provider) private middlewareProvider: Provider<RequestHandler>,
        @inject(Types.Logger) private logger: Logger,
        @inject(Types.Container) private container: interfaces.Container,
    ) {
        const app = new InversifyExpressServer(this.container);
        this.setConfig(app);
        this.application = app.build();
    }

    async start(): Promise<void> {
        return new Promise((res) => {
            this.server = this.application?.listen(this.config.server.port, () => {
                res(this.logger.info(`HTTP server listening on ${this.config.server.port}`));
            });
        });
    }

    async stop(): Promise<void> {
        this.server?.close();
    }

    private setConfig(app: InversifyExpressServer): void {
        app.setConfig((server: Application) => {
            this.middlewareProvider.provide().forEach(md => this.setMiddleware(server, md));
        });
    }

    private setMiddleware(server: Application, middleware: RequestHandler): void {
        server.use(middleware);
    }
}
