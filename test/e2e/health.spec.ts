import statusCodes from 'http-status-codes';

import AppClient from './utils/app-client';

describe('/health', () => {
    test('should return 200', async () => {
        const client = new AppClient();
        const response = await client.getHealth();

        expect(response.status).toEqual(statusCodes.OK);
        expect(response.data).toEqual('OK');
    });
});
