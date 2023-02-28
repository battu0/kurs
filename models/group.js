const Enrollment = require('./enrollment');
const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    enrollments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment',
        autopopulate: { maxDepth: 2 }
    }]
})

groupSchema.plugin(require('mongoose-autopopulate'))

groupSchema.methods.enroll = function(course, enrollmentDate) {
    const enrollment = new Enrollment(this, course, enrollmentDate);
    this.enrollments.push(enrollment);
}

module.exports = mongoose.model('Group', groupSchema)