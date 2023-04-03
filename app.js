const express = require('express');

const app = express();

app.use('/', express.static(__dirname + '/src/views'))
app.use('/services',express.static('services'));


app.listen(3000)
