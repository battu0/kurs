const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        autopopulate: { maxDepth: 1 }
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        autopopulate: { maxDepth: 1 }
    },
    enrollmentDate: String
})

enrollmentSchema.plugin(require('mongoose-autopopulate'))

enrollmentSchema.methods.drop = function(group, course) {
    const index = group.enrollments.findIndex(enrollment => enrollment === course);
    group.enrollments.splice(index, 1)
}

module.exports = mongoose.model('Enrollment', enrollmentSchema);