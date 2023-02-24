import 'reflect-metadata';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { METADATA_KEY } from 'inversify-express-utils';

import HealthController from '../../../../src/http/routes/health-controller';

describe('Health controller', () => {
    test('should should have correct controller metadata', () => {
        // GIVEN
        const metadata = Reflect.getMetadata(
            METADATA_KEY.controller,
            HealthController,
        );
        // THEN
        expect(metadata.path).toEqual('/health');
        expect(metadata.target).toEqual(HealthController);
    });

    test('should should have correct methods with paths asigned ', () => {
        // GIVEN
        const metadata = Reflect.getMetadata(
            METADATA_KEY.controllerMethod,
            HealthController,
        );
        // THEN
        const expected = [
            { 'key': 'get', 'method': 'get', 'middleware': [], 'path': '/', 'target': {} },
        ];
        expect(metadata).toEqual(expected);
    });

    test('should get return correct value', async () => {
        // GIVEN
        const req = jest.fn(() => ({} as express.Request))();
        const res = jest.fn(() => ({} as express.Response))();
        res.sendStatus = jest.fn();
        const controller = new HealthController();
        // WHEN
        await controller.get(req, res);
        // THEN
        expect(res.sendStatus).toBeCalledWith(StatusCodes.OK);
    });
});
