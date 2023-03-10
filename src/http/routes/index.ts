import { Container } from 'inversify';

import Types from '../../di/types';
import HealthController from './health-controller';

function register(container: Container): void {
    container.bind(Types.HTTP.Controller.Health).to(HealthController);
}

export default register;
