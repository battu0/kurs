const Course = require("../models/course");
const BaseDatabase = require("./base-database");

class CourseDatabase extends BaseDatabase {
};

module.exports = new CourseDatabase(Course);