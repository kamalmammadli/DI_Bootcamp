// exercise 1 part 1
// function infoAboutMe() {
//     console.log("My name is Kamal,23,playing football")
// }
// infoAboutMe()
// // part2

// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)
// }
// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

// // exercise 2
//  let tip = 1;
// let amountOfBil = prompt("Please add the amount of the bill");

// function calculateTip() {
//     if (!isNaN(amountOfBil)) {
//         if (amountOfBil <= 50) {
//             return tip = amountOfBil * 20 / 100;

//         } else if (amountOfBil > 50 && amountOfBil <= 200) {
//             return tip = amountOfBil * 15 / 100;
//         } else if (amountOfBil > 200) {
//             return tip = amountOfBil * 10 / 100
//         }
//     } else {
//       console.log("add a number please")
//     }

// }
// calculateTip();
// console.log(`todays tip is ${tip}$ and the final bill is ${Number(amountOfBil) + Number(tip)} `)
 
// exercise 3
// let number = 0;

// function isDivisible(a) {
//     for (let i = 0; i < 500; i++) {
//         if (i % a == 0) {
//             //          console.log(i)
//             number += i;

//         }

//     }
//     return number
// }

// console.log(isDivisible(30))

//exercise 4

// let stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// }
// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// }
// const shoppingList = ["banana", "orange", "apple"];
// let fruitPrice = 0;
// function myBill() {
//     for (fruit in stock) {
//         for (myFruit in shoppingList) {
//             if (fruit == shoppingList[myFruit] && stock[fruit] > 0) {
//                 fruitPrice += prices[fruit]}}}
//                 return fruitPrice;
// }
// console.log(myBill())

// exercise5

// changeEnough(4.25, [25, 20, 5, 0])

// exercise 6