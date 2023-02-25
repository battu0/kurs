const instructorService = require('../service/instructor-service');

const router = require('express').Router()

router.get('/', async (req, res) => {
    const instructors = await instructorService.load()
    res.render('instructors', { instructors })
})

router.post('/', async (req, res) => {
    const instructor = await instructorService.insert(req.body)
    res.send(instructor)
})

router.get('/:instructorId', async (req, res) => {
    const instructor = await instructorService.find(req.params.instructorId)
    if (!instructor) return res.status(404).send('Cannot find instructor')
    res.render('instructor', { instructor })
})

router.delete('/:instructorId', async (req, res) => {
    await instructorService.removeBy('_id' ,req.params.instructorId)
    res.send('OK')
})

router.patch('/:instructorId', async (req, res) => {
    const { instructorId } = req.params
    const { name } = req.body
    await instructorService.update(instructorId, { name })
})

module.exports = router;