const groupService = require('../service/group-service');
const enrollmentService = require('../service/enrollment-service');

const router = require('express').Router()

router.get('/', async (req, res) => {
    const groups = await groupService.load()
    res.render('groups', { groups })
})

router.post('/', async (req, res) => {
    try {
        const group = await groupService.insert(req.body)
        res.send(group)
    } catch(e) {
        next(e)
    }
})

router.get('/:groupId', async (req, res) => {
    const group = await groupService.find(req.params.groupId)
    if (!group) return res.status(404).send('Cannot find group')
    res.render('group', { group })
})

router.delete('/:groupId', async (req, res) => {
    await groupService.removeBy('_id' ,req.params.groupId)
    res.send('OK')
})

router.post('/:groupId/courses', async (req, res) => {
    const {courseId, enrollmentDate} = req.body
    const {groupId} = req.params
    const enrollment = await enrollmentService.enroll(groupId, courseId, enrollmentDate)
    res.send(enrollment)
})

router.patch('/:groupId', async (req, res) => {
    const { groupId } = req.params
    const { name } = req.body
    await groupService.update(groupId, { name })
})

module.exports = router;