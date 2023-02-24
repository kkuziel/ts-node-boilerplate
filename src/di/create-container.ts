import { Container, interfaces } from 'inversify';

import Types from './types';
import registerConfig from '../config';
import registerHTTPServer from '../http';
import registerLogger from '../application';

async function createContainer(): Promise<interfaces.Container> {
    const container = new Container();
    container.bind<Container>(Types.Container).toConstantValue(container);

    registerConfig(container);
    registerLogger(container);
    registerHTTPServer(container);

    return container;
}

export default createContainer;
