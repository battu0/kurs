const printGroupMembers = (group) => {
    group.members.forEach(printGroupMemberInfo)
}

const printGroupMemberInfo = (member) => {
    console.log(`${member.name} is a member of ${member.groups[0].name}.`)
}

const printEnrollmentHistory = (group) => {
    group.enrollments.forEach(printEnrollment)
}

const printEnrollment = (enrollment) => {
    console.log(`${enrollment.group.name} has enrolled the course ${enrollment.course.name}.`)
}


module.exports = { printGroupMembers, printGroupMemberInfo, printEnrollmentHistory, printEnrollment };