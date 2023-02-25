const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    enrollmentDate: String
})

enrollmentSchema.methods.drop = function(group, course) {
    const index = group.enrollments.findIndex(enrollment => enrollment === course);
    group.enrollments.splice(index, 1)
}

module.exports = mongoose.model('Enrollment', enrollmentSchema);