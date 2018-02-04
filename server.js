const express = require('express');
const path = require('path');
const app = express();

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/dist/');
});

app.listen(80, function () {
    console.log('App listening on port 80!');
});