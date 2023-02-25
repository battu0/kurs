const courseService = require('../service/course-service');

const router = require('express').Router()

router.get('/', async (req, res) => {
    const courses = await courseService.load()
    res.render('courses', { courses })
})

router.post('/', async (req, res) => {
    const course = await courseService.insert(req.body)
    res.send(course)
})

router.get('/:courseId', async (req, res) => {
    const course = await courseService.find(req.params.courseId)
    if (!course) return res.status(404).send('Cannot find course')
    res.render('course', { course })
})

router.delete('/:courseId', async (req, res) => {
    await courseService.removeBy('_id' ,req.params.courseId)
    res.send('OK')
})

router.patch('/:courseId', async (req, res) => {
    const { courseId } = req.params
    const { name } = req.body
    await courseService.update(courseId, { name })
})

module.exports = router;