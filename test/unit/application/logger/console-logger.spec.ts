import ConsoleLogger from '../../../../src/application/console-logger';
import ConsoleMock from '../../utils/console-mock';

describe('Console logger', () => {
    const consoleMock = new ConsoleMock();
    const logger = new ConsoleLogger(consoleMock);

    [
        {
            loggerCall: logger.info.bind(logger),
            mockCall: consoleMock.log,
            desc: 'info call log',
        },
        {
            loggerCall: logger.debug.bind(logger),
            mockCall: consoleMock.log,
            desc: 'debug call log',
        },
        {
            loggerCall: logger.error.bind(logger),
            mockCall: consoleMock.error,
            desc: 'error call error',
        },
    ].forEach(({ loggerCall, mockCall, desc }) => {
        test(`should ${desc} method`, async () => {
            // WHEN
            loggerCall('MSG', 'PARAMS');
            // THEN
            expect(mockCall).toBeCalledWith('MSG', 'PARAMS');
        });
    });
});

