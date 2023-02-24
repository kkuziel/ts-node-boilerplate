import Logger from '../../../src/application/logger';

export const loggerMock = {
    info: jest.fn(),
    debug: jest.fn(),
    error: jest.fn(),
} as Logger;
