import swaggerUi from 'swagger-ui-express';
import swaggerJsocDoc from 'swagger-jsdoc';
import { Application } from 'express';

import packageJson from '../../../package.json';

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
