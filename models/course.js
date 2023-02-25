const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: String,
    subject: String,
    instructors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor'
    }]
})

courseSchema.statics.create = function({name, subject, instructors, enrollees}) {
    return new Course(id, name, subject, instructors, enrollees)
}

module.exports = mongoose.model('Course', courseSchema);

// class Course {
//     constructor(id = uuid.v4() ,name, subject, instructors, enrollees = []) {
//         this.id = id;
//         this.name = name;
//         this.subject = subject;
//         this.instructors = instructors;
//         this.enrollees = enrollees;
//     }

//     static create({id, name, subject, instructors, enrollees}) {
//         return new Course(id, name, subject, instructors, enrollees)
//     }
// }

// module.exports = Course;