const BaseService = require("./base-service");
const Enrollment = require('../models/enrollment');
const groupService = require('../service/group-service')
const courseService = require('../service/course-service')

class EnrollmentService extends BaseService {
    async findByGroupId(groupId) {
        return this.findBy('group', groupId)
    }

    async findByCourseId(courseId) {
        return this.findBy('course', courseId)
    }

    async enroll(groupId, courseId, enrollmentDate) {
        const group = await groupService.find(groupId) 
        const course = await courseService.find(courseId)

        const enrollment = await this.insert({group, course, enrollmentDate})
        group.enrollments.push(enrollment)

        await group.save()

        return enrollment
    }
}

module.exports = new EnrollmentService(Enrollment);