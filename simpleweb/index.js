const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.setHeader('Content-Type', 'application/json');
   res.send('{"message": "Hi there!", "status": "live"}')
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
