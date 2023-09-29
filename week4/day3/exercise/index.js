// exercise 2
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// const welcomeMessages = users.map(user => ({
//   firstName: user.firstName,
//   welcomeMessage: `Welcome, ${user.firstName}!`
// }));

// console.log(welcomeMessages);

// const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');

// console.log(fullStackResidents);


// exercise 3
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const combinedString = epic.reduce((accumulator, currentValue) => {
//   return accumulator + ' ' + currentValue;
// });

// console.log(combinedString);
// 

// exercise 4

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

               const passedStudents = students.filter(student => student.isPassed==true);
            //    !!! muqayis etmek lazimdir ==

console.log(passedStudents);


