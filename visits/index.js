const express = require('express');
const process = require('process');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient({
                                           host: 'redis-server',
                                           port: 6379
                                       });
redisClient.set('visits', 0);

app.get('/', (req, res) => {
    process.exit(1);
    redisClient.get('visits', (err, visits) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(`{"message": "Hi there!", "visits": ${visits}}`);
        redisClient.set('visits', +visits + 1);
    })
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});
