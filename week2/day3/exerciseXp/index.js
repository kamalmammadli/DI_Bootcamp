// exercise 1 part 1
// const people = ["Greg", "Mary", "Devon", "James"];
// people.shift();
// console.log(people)
// people.splice(2, 1,"Jason");
// console.log(people)
// people.push("Kamal");
//  console.log(people)
// console.log(people.indexOf("Mary"))
// let users = people.slice(1,3)
// console.log(users)
// console.log(people.indexOf("Foo"))
// let last = people.length - 1
// console.log(people[last])

// exercise 1 part 2
// let people = ["Greg", "Mary", "Devon", "James"];
// for (let i = 0; i < people.length; i++) {
//     if(people[i] === "Devon") {
//       console.log(people[i]);
//         break;
//     } }

// exercise 2 //
// let colors = ['blue','red','green','brown','gray'];


// for (let i = 0; i < colors.length; i++){
//   console.log(`My ${i+1} choice is ${colors[i]}`) }

// exercise 3 
// 1. Prompt the user for a number.
// let num = prompt('Enter your number: ');

// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// console.log(typeof(num));

// 2
// let number = Number(num);
// console.log(typeof(number));

// 3

// let num = 0; 
// do {
//   num = prompt('Enter new number:')
//   console.log(num);
// } while (num < 10);

// exercise 4

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],}, }
  // 2.
//   console.log(building.numberOfFloors);
  
//   // 3..
//   console.log(building.numberOfAptByFloor.firstFloor);
//   console.log(building.numberOfAptByFloor.thirdFloor);
  
//    4. 
//   console.log(building.nameOfTenants[1]);
//   console.log(building.numberOfRoomsAndRent.dan);
  
//   // 5. 
//   let sarah = building.numberOfRoomsAndRent.sarah[1];
//   console.log(sarah);
//   let david = building.numberOfRoomsAndRent.david[1];
//   console.log(david);
//   let dan = building.numberOfRoomsAndRent.dan[1];
  
//   if (sarah + david> dan){
//     building.numberOfRoomsAndRent.dan.splice[1] = 1200;
//   } console.log(building);

// exercise 5

// let family = {
//     mother: 'Lala', 
//     father: 'John', 
//     sister: 'Kate',
//     brother: 'Tom',
//   }
  
//   for ( let item in family){
//     console.log(item);
//     console.log(family[item]);}

// exercise 6 


// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }
  
//   console.log('==========================');
//   for ( let item in details ){
//   console.log(item );
//   console.log(details[item]);
//   }
//   exercise 7
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// let ABJKPS = names.sort();
// console.log(ABJKPS);


// end