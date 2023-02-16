const Group = require("../models/group");
const BaseDatabase = require('./base-database');

class GroupDatabase extends BaseDatabase {

};

module.exports = new GroupDatabase(Group);