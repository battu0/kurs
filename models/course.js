const uuid = require('uuid')

class Course {
    constructor(id = uuid.v4() ,name, subject, instructors, enrollees = []) {
        this.id = id;
        this.name = name;
        this.subject = subject;
        this.instructors = instructors;
        this.enrollees = enrollees;
    }

    static create({id, name, subject, instructors, enrollees}) {
        return new Course(id, name, subject, instructors, enrollees)
    }
}

module.exports = Course;