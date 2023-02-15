const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const studentsRouter = require('./routes/students');
const indexRouter = require('./routes/index');
require('./mongo-connection')

app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/students', studentsRouter)

app.use('/', indexRouter)

app.listen(port, () => {
    console.log(`Started listening to port ${port}`)
})