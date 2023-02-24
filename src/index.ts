import createContainer from './di/create-container';
import Server from './http/server/server';
import Types from './di/types';

async function app() {
    try {
        const container = await createContainer();

        const server = container.get<Server>(Types.HTTP.Server);
        await server.start();

        console.log('Service ready');
    } catch (err) {
        console.error('Error during application start', err);
    }
}

app();
