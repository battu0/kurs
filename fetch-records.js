const courseService = require('./service/course-service')
const groupService = require('./service/group-service') 
const printAllEnrollment = require('./lib/printAllEnrollment')

async function main() {
    const tilki = await groupService.findByName('Tilki')
    const howSoftwareAteFinance = await courseService.findBy('name', 'How Software Ate Finance')

    tilki.enroll(howSoftwareAteFinance, '21 February, 2022')
    groupService.update(tilki)
    
    printAllEnrollment(tilki);
    console.log(await groupService.findBy('name', 'Fare'))

}   

main()