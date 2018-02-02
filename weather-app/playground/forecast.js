const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/0dc90dbd75a12e3747db480cf392ad21/33.9734553,-117.3263893',
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather.');
    }
});