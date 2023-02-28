const Group = require("../models/group");
const BaseService = require('./base-service');

class GroupService extends BaseService {
    async findByName(name) {
        const objects = await this.load()
        return objects.find(o => o.name === name)
    }
};

module.exports = new GroupService(Group);