const Course = require('./course');
const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    name: String,
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})

instructorSchema.methods.create = function(name, subject) {
    const course = new Course(name, subject);
    this.courses.push(course);
    course.instructors.push(this);
    return course;
}

instructorSchema.methods.collaborate = function(instructor, course) {
    course.instructor.push(instructor);
    console.log(`${this.name} is collaborating with ${instructor.name} in designing ${course.name}`);
}

module.exports = mongoose.model('Instructor', instructorSchema)

// class Instructor {
//     constructor(id = uuid.v4(), name, courses = []) {
//         this.id = id;
//         this.name = name;
//         this.courses = courses;
//     }

//     create(name, subject) {
//         const course = new Course(name, subject);
//         this.courses.push(course);
//         course.instructors.push(this);

//         return course;
//     }

//     collaborate(instructor, course) {
//         course.instructors.push(instructor);
//         console.log(`${colors.bgCyan.black(this.name)} is collaborating with ${colors.bgMagenta.black(instructor.name)} in designing the course ${course.name}`);
//     }

//     static create({id, name, courses}) {
//         return new Instructor(id, name, courses)
//     }
// }

module.exports = Instructor;
