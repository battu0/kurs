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

router.get('/:groupId', async (req, res) => {
    const group = await groupDatabase.find(req.params.groupId)
    if (!group) return res.status(404).send('Cannot find group')
    res.render('group', { group })
})

router.delete('/:groupId', async (req, res) => {
    groupDatabase.removeBy('id', req.params.groupId)
})

module.exports = router;