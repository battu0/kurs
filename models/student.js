const colors = require('colors');
const uuid = require('uuid');
const Group = require('./group');

class Student {
    constructor(id = uuid.v4(), name, friends = [], groups = []) {
        this.id = id;
        this.name = name;
        this.friends = friends;
        this.groups = groups;
    }

    form(name) {
        const group = new Group(name);
        this.groups.push(group);
        group.members.push(this);

        return group;
    }

    join(group) {
        this.groups.push(group);
        group.members.push(this);
    }

    quit(group) {
        const index = group.members.findIndex(element => element === this);
        group.members.splice(index, 1)
    }

    static create({id, name, friends, groups}) {
        return new Student(id, name, friends, groups)
    }
}

module.exports = Student;