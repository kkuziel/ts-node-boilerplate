import 'reflect-metadata';
import { injectable } from 'inversify';
import Logger from './logger';

@injectable()
class CustomLoggerImpl implements Logger {
    constructor(private logger = console) { }

    debug(message: string, ...args: unknown[]): void {
        this.logger.info(message, ...args);
    }

    info(message: string, ...args: unknown[]): void {
        this.logger.info(message, ...args);
    }

    error(message: string, ...args: unknown[]): void {
        this.logger.error(message, ...args);
    }
}

export default CustomLoggerImpl;
