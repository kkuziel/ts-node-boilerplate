import { Container } from 'inversify';

import Types from '../di/types';
import ConsoleLogger from './console-logger';
import Logger from './logger';

export default function register(container: Container): void {
    container.bind<Logger>(Types.Logger).to(ConsoleLogger);
}
