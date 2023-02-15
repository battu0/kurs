const Enrollment = require('./enrollment');

class Group {
    constructor(name) {
        this.name = name;
        this.members = [];
        this.enrollments = [];
    }

    enroll(course) {
        const enrollment = new Enrollment(this, course);
        this.enrollments.push(enrollment);
    }

}

module.exports = Group;