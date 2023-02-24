import 'reflect-metadata';
import { Server } from 'http';
import HTTPServer from './server';
import { Application } from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { interfaces, inject, injectable } from 'inversify';

import { Config } from '../../config/config';

import Types from '../../di/types';
import Logger from '../../application/logger';

@injectable()
export default class HTTPServerImpl implements HTTPServer {
    private application: Application;

    private server: Server | undefined;

    constructor(
        @inject(Types.Config) private config: Config,
        @inject(Types.Logger) private logger: Logger,
        @inject(Types.Container) private container: interfaces.Container,
    ) {
        const app = new InversifyExpressServer(this.container);
        this.application = app.build();
    }

    async start(): Promise<void> {
        this.server = await this.application?.listen(this.config.server.port, () => {
            this.logger.info(`HTTP server listening on ${this.config.server.port}`);
        });

        this.registerSignalHandlers.call(this);
        this.registerGracefulShutdown.call(this);
    }

    private shutdown() {
        if (this.server) this.server.close(() => {
            process.exit(0);
        });
    }

    private registerSignalHandlers() {
        process.on('SIGTERM', this.shutdown);
        process.on('SIGINT', this.shutdown);
    }

    private registerGracefulShutdown() {
        const eventType = 'uncaughtException';
        process.on(eventType, (err) => {
            this.logger.error(eventType, err.message);
            if (this.server) this.server.close(() => {
                process.exit(1);
            });
        });
    }
}
