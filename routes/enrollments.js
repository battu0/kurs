const enrollmentService = require('../service/enrollment-service');

const router = require('express').Router()

router.get('/', async (req, res) => {
    const enrollments = await enrollmentService.load()
    res.render('enrollments', { enrollments })
})

router.get('/search', async (req, res) => {
    const enrollmentDate = req.query.enrollmentDate
    const enrollments = await enrollmentService.query({ enrollmentDate })
    res.render('enrollments', { enrollments })
})

module.exports = router;