const Group = require('./group');
const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: String,
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group'
    }]
})

studentSchema.methods.form = function(name) {
    const group = new Group(name);
    this.groups.push(group);
    group.members.push(this);
    return group;
}

studentSchema.methods.join = function(group) {
    this.groups.push(group);
    group.members.push(this);
}

studentSchema.methods.quit = function(group) {
    const index = group.members.findIndex(member => member === this);
    group.members.splice(index, 1);
}

module.exports = mongoose.model('Student', studentSchema);