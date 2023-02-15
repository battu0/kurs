const studentDatabase = require('../database/student-database');
const Student = require('../models/student');
const flatted  = require('flatted');

const router = require('express').Router()

router.get('/', async (req, res) => {
    const students = await studentDatabase.load()
    res.render('students', { students })
})

router.post('/', async (req, res) => {
    const student = Student.create(req.body)
    await studentDatabase.insert(student)
    res.send(student)
})

router.get('/:studentId', async (req, res) => {
    const student = await studentDatabase.find(req.params.studentId)
    if (!student) return res.status(404).send('Cannot find student')
    res.render('student', { student })
})

module.exports = router;