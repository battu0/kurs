const colors = require('colors');

const printEnrollment = (enrollment) => {
    console.log(`${colors.yellow(enrollment.group.name)} has enrolled the course ${colors.blue(enrollment.course.name)} on ${colors.blue(enrollment.enrollmentDate)}.`)    
}

const printAllEnrollment = (group) => {
    if (group.enrollments.length === 0) {
        return console.log(`${group.name} has no enrollments yet.`)
    }
    group.enrollments.forEach(printEnrollment)
}

module.exports = printAllEnrollment;