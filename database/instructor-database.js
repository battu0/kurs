const Instructor = require("../models/instructor");
const BaseDatabase = require("./base-database");


class InstructorDatabase extends BaseDatabase {

};

module.exports = new InstructorDatabase(Instructor);