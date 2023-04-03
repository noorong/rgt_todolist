const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/src/views'))


app.listen(3000)
