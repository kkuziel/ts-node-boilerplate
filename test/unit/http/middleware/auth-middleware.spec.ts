import 'reflect-metadata';
import express from 'express';


import Types from '../../../../src/di/types';
import createContainer from '../../../../src/di/create-container';
import AuthMiddleware from '../../../../src/http/middleware/auth-middleware';
import { loggerMock } from '../../utils/logger-mock';

describe('Auth middleware', () => {
    async function createMiddleware() {
        const container = await createContainer();
        container.rebind(Types.Logger).toConstantValue(loggerMock);

        return container.get<AuthMiddleware>(Types.HTTP.Middleware.Auth);
    }

    test('should on success call next function', async () => {
        // GIVEN
        const middleware = await createMiddleware();
        const req = jest.fn(() => ({} as express.Request))();
        const res = jest.fn(() => ({} as express.Response))();
        const next = jest.fn();
        // WHEN
        middleware.handler(req, res, next);
        // THEN
        expect(next).toHaveBeenCalled();
    });
});
