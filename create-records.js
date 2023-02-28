const courseService = require('./service/course-service');
const groupService = require('./service/group-service');
const Course = require('./models/course');
const Group = require('./models/group');

const printAllEnrollment = require('./lib/printAllEnrollment');

const kedi = Group.create({name: 'Kedi'});
const fare = Group.create({name: 'Fare'});

const howSoftwareAteFinance = Course.create({name: 'How Software Ate Finance', subject: 'Finance', instructors: ['R. Martin Chavez', 'Jeffrey Conn']});
const financialMarkets = Course.create({name: 'Financial Markets', subject: 'Finance', instructors: ['Robert Shiller']});
const learningHowToLearn = Course.create({name: 'Learning How To Learn', subject: 'Personal Development', instructors: ['Barbara Oakley', 'Dr. Terrence Sejnowski']});


kedi.enroll(howSoftwareAteFinance, 'February 14, 2022');
kedi.enroll(financialMarkets, 'February 7, 2022');
kedi.enroll(learningHowToLearn, 'January 14, 2022');
fare.enroll(learningHowToLearn, 'January 18, 2022');

// printMembers(kedi);
// printEnrollment(kedi);


async function main() {
    try {
        await groupService.save([kedi, fare]);
        
        await courseService.save([howSoftwareAteFinance, financialMarkets, learningHowToLearn]);

        const tilki = Group.create({name: 'Tilki'});

        await groupService.insert(tilki)
        const groups = await groupService.load()
        groups.forEach(printAllEnrollment)

    } catch(e) {
        return console.log(e);
    }
}

main()