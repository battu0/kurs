const groupDatabase = require('../database/group-database');
const Group = require('../models/group');
const flatted  = require('flatted');
const courseDatabase = require('../database/course-database');

const router = require('express').Router()

router.get('/', async (req, res) => {
    const groups = await groupDatabase.load()
    res.render('groups', { groups })
})

router.post('/', async (req, res) => {
    const group = await groupDatabase.insert(req.body)
    res.send(group)
})

router.get('/:groupId', async (req, res) => {
    const group = await groupDatabase.find(req.params.groupId)
    if (!group) return res.status(404).send('Cannot find group')
    res.render('group', { group })
})

router.delete('/:groupId', async (req, res) => {
    await groupDatabase.removeBy('_id' ,req.params.groupId)
    res.send('OK')
})

router.post('/:groupId/courses', async (req, res) => {
    const {courseId, enrollmentDate} = req.body
    const {groupId} = req.params
    const course = await courseDatabase.find(courseId)
    const group = await groupDatabase.find(groupId)
    group.enroll(course, enrollmentDate)
    await groupDatabase.update(group)
    res.send('OK')
})

router.patch('/:groupId', async (req, res) => {
    const { groupId } = req.params
    const { name } = req.body
    await groupDatabase.update(groupId, { name })
})

module.exports = router;