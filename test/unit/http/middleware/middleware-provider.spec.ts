import 'reflect-metadata';
import Types from '../../../../src/di/types';

import createContainer from '../../../../src/di/create-container';
import { RequestHandler } from 'express';
import Provider from '../../../../src/http/middleware/provider';

describe('Middleware provider', () => {
    test('should return correct number of middleware', async () => {
        // GIVEN
        const container = await createContainer();
        const middlewareProvider = container.get<Provider<RequestHandler>>(Types.HTTP.Middleware.Provider);
        // WHEN
        const actual = middlewareProvider.provide();
        // THEN
        expect(actual).toHaveLength(4);
    });
});
