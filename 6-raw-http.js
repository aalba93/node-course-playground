const https = require('https');
const url = 'https://api.darksky.net/forecast/fc2044bdaa450ea332cdf82740665a01/40,-75?units=si';

const request = https.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });
    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.log('An error', error);
});

request.end();