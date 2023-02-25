const studentService = require('../service/student-service');

const router = require('express').Router()

router.get('/', async (req, res) => {
    const students = await studentService.load()
    res.render('students', { students })
})

router.post('/', async (req, res) => {
    const student = await studentService.insert(req.body)
    res.send(student)
})

router.get('/:studentId', async (req, res) => {
    const student = await studentService.find(req.params.studentId)
    if (!student) return res.status(404).send('Cannot find student')
    res.render('student', { student })
})

router.delete('/:studentId', async (req, res) => {
    await studentService.removeBy('_id' ,req.params.studentId)
    res.send('OK')
})

router.patch('/:studentId', async (req, res) => {
    const { studentId } = req.params
    const { name } = req.body
    await studentService.update(studentId, { name })
})

module.exports = router;