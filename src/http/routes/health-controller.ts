import 'reflect-metadata';

import { Controller, controller, httpGet, request, response } from 'inversify-express-utils';
import express from 'express';
import { StatusCodes } from 'http-status-codes';

/**
 * @swagger
 * tags:
 *   name: health
 *   description: Service health check
 */
@controller('/health')
export default class HealthController implements Controller {
    /**
       * @swagger
       * /:
       *   get:
       *     summary: Checks the status of the service
       *     tags: []
       *     responses:
       *       200:
       *         description: OK
       */
    @httpGet('/')
    get(@request() req: express.Request, @response() res: express.Response) {
        res.sendStatus(StatusCodes.OK);
    }
}
