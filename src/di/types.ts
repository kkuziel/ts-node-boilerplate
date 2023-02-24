export default {
    Container: Symbol.for('container'),
    Config: Symbol.for('config'),
    Logger: Symbol.for('logger'),
    HTTP: {
        Server: Symbol.for('http-server'),
        Middleware: {},
        Controller: {
            Health: Symbol.for('http-controller-health'),
        },
    },
};
