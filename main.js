const Api = require('./api');

const UPCLOUD_USERNAME = process.env.UPCLOUD_USERNAME;
const UPCLOUD_PASSWORD = process.env.UPCLOUD_PASSWORD;

async function main() {
    const cloudApi = new Api(UPCLOUD_USERNAME, UPCLOUD_PASSWORD);

    const resp = await cloudApi.startServer('0064fa34-587a-4a66-a760-6603d7c406c2');

    console.log(resp);
}

(async () => {
    try {
        await main();
    } catch (e) {
        console.log(e.response.data);
    }
})();
