const BaseDatabase = require('./base-database');
const Student = require('../models/student');

class StudentDatabase extends BaseDatabase {
};

module.exports = new StudentDatabase(Student);