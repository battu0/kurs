class Course {
    constructor(name, subject, instructors, enrollees = []) {
        this.name = name;
        this.subject = subject;
        this.instructors = instructors;
        this.enrollees = enrollees;
    }

    static create({name, subject, instructors, enrollees}) {
        return new Course(name, subject, instructors, enrollees)
    }
}

module.exports = Course;