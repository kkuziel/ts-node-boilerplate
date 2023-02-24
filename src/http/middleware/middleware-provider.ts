import { inject, injectable } from 'inversify';
import { RequestHandler } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';

import Types from '../../di/types';
import Provider from './provider';
import { BaseMiddleware } from 'inversify-express-utils';

@injectable()
export default class MiddlewareProvider implements Provider<RequestHandler> {
    readonly middleware: RequestHandler[];

    constructor(@inject(Types.HTTP.Middleware.Auth) authMiddleware: BaseMiddleware) {
        this.middleware = [
            ...this.getCommonMiddleware(),
            authMiddleware.handler.bind(authMiddleware),
        ];
    }

    public provide(): RequestHandler[] {
        return this.middleware;
    }

    private getCommonMiddleware(): RequestHandler[] {
        return [
            bodyParser.json(),
            cors(),
            helmet(),
        ];
    }
}
