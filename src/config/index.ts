import { Container } from 'inversify';

import Types from '../di/types';
import { Config } from './config';
import ConfigProvider from './config-provider';

export default async function register(container: Container) {
    const config = new ConfigProvider().getConfig();
    container.bind<Config>(Types.Config).toConstantValue(config);
}
