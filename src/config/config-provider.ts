import { Config, ServerConfig } from './config';

export default class ConfigProvider {
    getConfig(): Config {
        return {
            server: this.getServerConfig(),
        };
    }

    getServerConfig(): ServerConfig {
        return {
            port: this.getNumber('PORT'),
        };
    }

    getEnvVariable(varName: string): string {
        const value = process.env[varName];
        if (value) {
            return value;
        }
        throw new Error(`ENV variable does not exist: ${varName}`);
    }

    getNumber(varName: string): number {
        return parseInt(this.getEnvVariable(varName), 10);
    }
}

