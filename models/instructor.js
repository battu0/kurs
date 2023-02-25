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