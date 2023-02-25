const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    name: String,
    subject: String,
    instructors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor'
    }]
})

module.exports = mongoose.model('Course', courseSchema);