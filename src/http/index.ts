import { Container } from 'inversify';

import Types from '../di/types';
import HealthController from './routes/health-controller';
import HttpServer from './server/http-server';

function register(container: Container): void {
    registerInfrastructure(container);
    registerMiddlewares();
    registerControllers(container);
}

function registerControllers(container: Container) {
    container.bind(Types.HTTP.Controller.Health).to(HealthController);
}

function registerInfrastructure(container: Container) {
    container.bind(Types.HTTP.Server).to(HttpServer);
}

function registerMiddlewares() { }

export default register;
