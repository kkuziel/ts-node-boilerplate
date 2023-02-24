import 'reflect-metadata';
import { injectable } from 'inversify';
import Logger from './logger';

@injectable()
class ConsoleLogger implements Logger {
    constructor(private logger = console) { }

    debug(message: string, ...args: unknown[]): void {
        this.logger.log(message, ...args);
    }

    info(message: string, ...args: unknown[]): void {
        this.logger.log(message, ...args);
    }

    error(message: string, ...args: unknown[]): void {
        this.logger.error(message, ...args);
    }
}

export default ConsoleLogger;
