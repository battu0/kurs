const groupService = require('../service/group-service');
const courseService = require('../service/course-service');

const router = require('express').Router()

router.get('/', async (req, res) => {
    const groups = await groupService.load()
    res.render('groups', { groups })
})

router.post('/', async (req, res) => {
    const group = await groupService.insert(req.body)
    res.send(group)
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
    const course = await courseService.find(courseId)
    const group = await groupService.find(groupId)
    group.enroll(course, enrollmentDate)
    await groupService.update(group)
    res.send('OK')
})

router.patch('/:groupId', async (req, res) => {
    const { groupId } = req.params
    const { name } = req.body
    await groupService.update(groupId, { name })
})

module.exports = router;