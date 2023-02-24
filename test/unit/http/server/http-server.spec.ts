import 'reflect-metadata';
import Types from '../../../../src/di/types';
import createContainer from '../../../../src/di/create-container';
import Server from '../../../../src/http/server/server';
import { loggerMock } from '../../utils/logger-mock';

describe('HTTP server', () => {
    let server: Server;
    afterEach(() => {
        server.stop();
    });
    const middleware = jest.fn((req, res, next) => next());
    const middlewareProvider = () => ({ provide: jest.fn().mockReturnValue([middleware]) });
    const createServer = async () => {
        const container = await createContainer();
        container.rebind(Types.Logger).toConstantValue(loggerMock);
        container.rebind(Types.HTTP.Middleware.Provider).toConstantValue(middlewareProvider());
        return container.get<Server>(Types.HTTP.Server);
    };

    test('should start server', async () => {
        // GIVEN
        server = await createServer();
        // WHEN
        await server.start();
        // THEN
        await expect(loggerMock.info).toBeCalledWith('HTTP server listening on 1234');
    });
});
