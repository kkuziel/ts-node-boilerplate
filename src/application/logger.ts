type Logger = {
    debug(message: string, ...args: unknown[]): void;
    info(message: string, ...args: unknown[]): void;
    error(message: string, ...args: unknown[]): void;
};

export default Logger;
