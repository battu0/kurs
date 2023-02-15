const studentDatabase = require("./database/student-database");
const instructorDatabase = require("./database/instructor-database");
const Instructor = require("./models/instructor");
const Student = require("./models/student");
const { printGroupMembers, printEnrollmentHistory } = require('./lib/printGroupInfo');

const kseniya = Student.create({'name': 'Kseniya'});
const michael = Student.create({'name': 'Michael'});
const megan   = Student.create({'name': 'Megan',});
const batu    = Student.create({'name': 'Batu'});
const batuhan = Student.create({'name': 'Batuhan'});
const merve   = Student.create({'name': 'Merve'});
const buse    = Student.create({'name': 'Buse'});

const marty   = Instructor.create({'name': 'R. Martin Chavez'});
const jeff    = Instructor.create({'name': 'Jeffrey Conn'});

async function main() {

    const grizzlies = batu.form('Grizzlies');
    batuhan.join(grizzlies);

    const candy = merve.form('Candy');
    buse.join(candy);
    
    const cat = kseniya.form("Cat");
    michael.join(cat);
    megan.join(cat);

    const howSoftwareAteFinance = marty.create("How Software Ate Finance", 'Finance');
    marty.collaborate(jeff, howSoftwareAteFinance);

    const robert = Instructor.create({"name": "Robert"})
    await instructorDatabase.insert(robert);
    const financialMarkets = robert.create("Financial Markets");
    

    const jack = Student.create({'name': 'Jack'})
    jack.join(cat);

    printGroupMembers(cat);
    
    cat.enroll(howSoftwareAteFinance);
    printEnrollmentHistory(cat);

    await studentDatabase.save([kseniya, michael, megan, jack, batu, batuhan, merve, buse])
    await instructorDatabase.save([marty, jeff, robert])
}

main()