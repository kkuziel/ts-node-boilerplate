import { inject, injectable } from 'inversify';
import { Request as Req, Response as Res, NextFunction } from 'express';

import Types from '../../di/types';
import Logger from '../../application/logger';

@injectable()
export default class AuthMiddleware {
    constructor(
        @inject(Types.Logger) private logger: Logger,
    ) {
    }

    public async handler(req: Req, res: Res, next: NextFunction) {
        this.logger.info('Auth middleware');
        next();
    }
}
