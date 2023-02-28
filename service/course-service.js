const Course = require("../models/course");
const BaseService = require("./base-service");

class CourseService extends BaseService {
};

module.exports = new CourseService(Course);