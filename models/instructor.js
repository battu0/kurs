const colors = require('colors');
const uuid = require('uuid');
const Course = require('./course');

class Instructor {
    constructor(id = uuid.v4(), name, courses = []) {
        this.id = id;
        this.name = name;
        this.courses = courses;
    }

    create(name, subject) {
        const course = new Course(name, subject);
        this.courses.push(course);
        course.instructors.push(this);

        return course;
    }

    collaborate(instructor, course) {
        course.instructors.push(instructor);
        console.log(`${colors.bgCyan.black(this.name)} is collaborating with ${colors.bgMagenta.black(instructor.name)} in designing the course ${course.name}`);
    }

    static create({id, name, courses}) {
        return new Instructor(id, name, courses)
    }
}

module.exports = Instructor;
