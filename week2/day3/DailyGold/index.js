const numbers = [5,0,9,1,7,4,2,6,3,8];

// 1
let numbersToString = numbers.toString();
console.log(numbersToString);

//2

let numbersWithJoin = numbers.join(' ');
console.log(numbersWithJoin);
let numbersWithJoin2 = numbers.join('+')
console.log(numbersWithJoin2);
let numbersWithJoin3 = numbers.join("")
console.log(numbersWithJoin3);

// 3

for (let i = 0; i < 1; i++){
 let bubbleSort = numbers.sort();
 bubbleSort.sort(function(a, b) {return b-a})
  console.log(bubbleSort);
}