const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const groupsRouter = require('./routes/groups');
const coursesRouter = require('./routes/courses');
const studentsRouter = require('./routes/students');
const instructorsRouter = require('./routes/instructors');
const enrollmentsRouter = require('./routes/enrollments')

require('./mongo-connection')
const port = 3000;

const app = express();
app.use(bodyParser.json())

app.set('view engine', 'pug')

app.use('/', indexRouter)
app.use('/groups', groupsRouter)
app.use('/courses', coursesRouter)
app.use('/students', studentsRouter)
app.use('/instructors', instructorsRouter)
app.use('/enrollments', enrollmentsRouter)

app.listen(port, () => {
    console.log(`Started listening to port ${port}`)
})