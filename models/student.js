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

// class Student {
//     constructor(id = uuid.v4(), name, friends = [], groups = []) {
//         this.id = id;
//         this.name = name;
//         this.friends = friends;
//         this.groups = groups;
//     }

//     form(name) {
//         const group = new Group(name);
//         this.groups.push(group);
//         group.members.push(this);

//         return group;
//     }

//     join(group) {
//         this.groups.push(group);
//         group.members.push(this);
//     }

//     quit(group) {
//         const index = group.members.findIndex(element => element === this);
//         group.members.splice(index, 1)
//     }

//     static create({id, name, friends, groups}) {
//         return new Student(id, name, friends, groups)
//     }
// }

// module.exports = Student;