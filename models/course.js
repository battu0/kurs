const uuid = require('uuid');

class Course {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.instructors = [];
    }
}

module.exports = Course;