const axios = require('axios');

const BASE_URL = 'https://api.upcloud.com';
const VERSION = '1.3';

class Api {
    constructor(username, password) {
        this.authString = Buffer.from(`${username}:${password}`).toString('base64');
    }

    async getAccount() {
        const urlPath = `${BASE_URL}/${VERSION}/account`;

        const request = {
            method: 'get',
            url: urlPath,
            headers: {
                'Authorization': 'Basic ' + this.authString
            }
        };

        const response = await axios(request);

        return response;
    }

    async startServer(uuid) {
        const urlPath = `${BASE_URL}/${VERSION}/server/${uuid}/start`;

        const request = {
            method: 'post',
            url: urlPath,
            headers: {
                'Authorization': 'Basic ' + this.authString
            }
        };

        const response = await axios(request);

        return response;
    }
}

module.exports = Api;
