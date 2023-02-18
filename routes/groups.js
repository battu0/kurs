const groupDatabase = require('../database/group-database');
const Group = require('../models/group');
const flatted  = require('flatted');

const router = require('express').Router()

router.get('/', async (req, res) => {
    const groups = await groupDatabase.load()
    res.render('groups', { groups })
})

router.post('/', async (req, res) => {
    const group = await groupDatabase.insert(req.body)
    res.send(group)
})

router.get('/:studentId', async (req, res) => {
    const group = await groupDatabase.find(req.params.studentId)
    if (!group) return res.status(404).send('Cannot find group')
    res.render('group', { group })
})

module.exports = router;