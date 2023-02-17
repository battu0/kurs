const Group = require("../models/group");
const BaseDatabase = require('./base-database');

class GroupDatabase extends BaseDatabase {
    async findByName(name) {
        const objects = await this.load()
        return objects.find(o => o.name === name)
    }
};

module.exports = new GroupDatabase(Group);