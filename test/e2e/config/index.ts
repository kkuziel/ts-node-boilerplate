import local from './local';

import { Config } from './config';

const configurationMap: { [key: string]: Config } = {
    local,
};

export default function getConfig(): Config {
    return configurationMap[process.env.ENV || 'local'];
}
