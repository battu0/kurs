const courseDatabase = require('./database/course-database')
const groupDatabase = require('./database/group-database') 
const printAllEnrollment = require('./lib/printAllEnrollment')

async function main() {
    const tilki = await groupDatabase.findByName('Tilki')
    const howSoftwareAteFinance = await courseDatabase.findBy('name', 'How Software Ate Finance')

    tilki.enroll(howSoftwareAteFinance, '21 February, 2022')
    groupDatabase.update(tilki)
    
    printAllEnrollment(tilki);
    console.log(await groupDatabase.findBy('name', 'Fare'))

}   

main()