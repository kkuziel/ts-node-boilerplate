export default {
    Container: Symbol.for('container'),
    Config: Symbol.for('config'),
    Logger: Symbol.for('logger'),
    HTTP: {
        Server: Symbol.for('http-server'),
        Middleware: {
            Auth: Symbol.for('http-middleware-auth'),
            Provider: Symbol.for('http-middleware-provider'),
        },
        Controller: {
            Health: Symbol.for('http-controller-health'),
        },
    },
};
