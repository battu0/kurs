const BaseService = require('./base-service');
const Student = require('../models/student');

class StudentService extends BaseService {
};

module.exports = new StudentService(Student);