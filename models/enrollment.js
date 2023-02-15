class Enrollment {
    constructor(group, course) { 
        this.group = group;
        this.course = course;
    }

    drop(group, course) {
        const index = group.enrollments.findIndex(enrollment => enrollment === course);
        group.enrollments.splice(index, 1);
    }
}

module.exports = Enrollment;