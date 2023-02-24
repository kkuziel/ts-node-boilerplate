import { Container } from 'inversify';

import AuthMiddleware from './auth-middleware';

import Types from '../../di/types';
import MiddlewareProvider from './middleware-provider';

export default function register(container: Container) {
    container.bind(Types.HTTP.Middleware.Provider)
        .to(MiddlewareProvider);
    container.bind(Types.HTTP.Middleware.Auth)
        .to(AuthMiddleware);
}
