const uuid = require('uuid')
const Enrollment = require('./enrollment');

class Group {
    constructor(id = uuid.v4(), name, members = [], enrollments = []) {
        this.id = id;
        this.name = name;
        this.members = members;
        this.enrollments = enrollments;
    }

    enroll(course, enrollmentDate) {
        const enrollment = new Enrollment(this, course, enrollmentDate);
        this.enrollments.push(enrollment);
    }

    static create({id, name, members, enrollments}) {
        return new Group(id, name, members, enrollments)
    }
}

module.exports = Group;