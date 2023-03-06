import swaggerUi from 'swagger-ui-express';
import swaggerJsocDoc from 'swagger-jsdoc';
import { Application } from 'express';

import packageJson from '../../../package.json';

import { Container } from 'inversify';

import Types from '../../di/types';
import HealthController from './health-controller';

function register(container: Container): void {
    container.bind(Types.HTTP.Controller.Health).to(HealthController);
}

export default register;

export function setApiDocs(server: Application): void {
    const options = {
        swaggerDefinition: {
            info: {
                title: packageJson.name,
                version: packageJson.version,
            },
        },
        apis: [
            './src/http/routes/*controller.*s',
        ],
    };

    const swaggerSpec = swaggerJsocDoc(options);
    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
