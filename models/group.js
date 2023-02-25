const Enrollment = require('./enrollment');
const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: String,
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    enrollments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment'
    }]
})

groupSchema.methods.enroll = function(course, enrollmentDate) {
    const enrollment = new Enrollment(this, course, enrollmentDate);
    this.enrollments.push(enrollment);
}

module.exports = mongoose.model('Group', groupSchema)