const express = require('express');
const app = express();
app.listen(3000, () => console.log('3000 start'));

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})