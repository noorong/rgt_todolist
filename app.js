const express = require('express');

const app = express();

const todoRouter = require('./routes/todolist')

// app.use(todoRouter);

app.use('/', express.static(__dirname + '/views'))


app.listen(3000)
