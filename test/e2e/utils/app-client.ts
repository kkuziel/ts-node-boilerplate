import axios, { Axios } from 'axios';
import getConfig from '../config';

export default class AxinomClient {
    private readonly client: Axios;

    constructor() {
        this.client = axios.create({
            baseURL: getConfig().host,
        });
    }

    async getHealth() {
        return this.client.get('/health');
    }
}
