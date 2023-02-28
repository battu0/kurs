const Instructor = require("../models/instructor");
const BaseService = require("./base-service");


class InstructorService extends BaseService {

};

module.exports = new InstructorService(Instructor);