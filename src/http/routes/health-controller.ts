import 'reflect-metadata';

import { Controller, controller, httpGet, request, response } from 'inversify-express-utils';
import express from 'express';
import { StatusCodes } from 'http-status-codes';

@controller('/health')
export default class HealthController implements Controller {
    @httpGet('/')
    get(@request() req: express.Request, @response() res: express.Response) {
        res.sendStatus(StatusCodes.OK);
    }
}
