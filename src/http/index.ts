import { Container } from 'inversify';

import Types from '../di/types';
import HttpServer from './server/http-server';
import registerMiddleware from './middleware';
import registerControllers from './routes';

function register(container: Container): void {
    registerInfrastructure(container);
    registerMiddleware(container);
    registerControllers(container);
}

function registerInfrastructure(container: Container) {
    container.bind(Types.HTTP.Server).to(HttpServer);
}

export default register;
