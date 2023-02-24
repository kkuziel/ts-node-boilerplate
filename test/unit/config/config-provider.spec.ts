import ConfigProvider from '../../../src/config/config-provider';
import createContainer from '../../../src/di/create-container';
import Types from '../../../src/di/types';

describe('Configuration provider', () => {
    test('should return correct config ', async () => {
        // GIVEN
        const container = await createContainer();
        // WHEN
        const actualConfig = container.get(Types.Config);
        // THEN
        const expectedConfig = {
            server: {
                port: 1234,
            },
        };
        expect(actualConfig).toEqual(expectedConfig);
    });

    test('should throw an error environment variable is missing ', async () => {
        // GIVEN
        const configProvider = new ConfigProvider();
        // WHEN
        delete process.env.PORT;
        // THEN
        expect(() => configProvider.getConfig()).toThrowError(new Error('ENV variable does not exist: PORT'));
    });
});
