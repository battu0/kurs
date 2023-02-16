const Enrollment = require('./enrollment');

class Group {
    constructor(name, members = [], enrollments = []) {
        this.name = name;
        this.members = members;
        this.enrollments = enrollments;
    }

    enroll(course) {
        const enrollment = new Enrollment(this, course);
        this.enrollments.push(enrollment);
    }

    static create({name, members, enrollments}) {
        return new Group(name, members, enrollments)
    }
}

module.exports = Group;