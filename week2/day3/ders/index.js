// for (let i = 0; i <= 15; i++) {
//     console.log(i)
//     if(i%2 == 0 ){
//         console.log(i+" is an even number")
//     }else{
//         console.log(i+" is an odd number")
// }
// }


    // 
// let sum = 1
//     for (let i = 1; i <=10; i++){ 
//           console.log(sum); sum *= i
//         } 
  
//         console.log(sum)
// let names = ["john", "sarah", 23, "Rudolf", 34];
// for (let i = 0; i < names.length; i++) {
//   if (isNaN(names[i])) {
//     let reg = /^[a-z]$/;
//     if (reg.test(names[i][0])) {
//       // console.log(names[i]);
//       // console.log("first letter is lowercase");
//       let splittedName = names[i].split(""); // ["john"]
//       let firstCapitalLetter = splittedName[0].toUpperCase();
//       splittedName.splice(0, 1, firstCapitalLetter);
//       let joinedString = splittedName.join("");
//       names.splice(i, 1, joinedString);
//     }
//   } else {
//     continue;
//   }
// }
// // Assuming variableNames is an array containing the variable names
// for (let item of names) {
//   // Check if the item is a string
//   if (typeof item === "string") {
//     // Check if the first letter is not already uppercase
//     if (item.charAt(0) !== item.charAt(0).toUpperCase()) {
//       // Change the first letter to uppercase
//       item = item.charAt(0).toUpperCase() + item.slice(1);
//     }
//     // Display the modified or original name
//     console.log(item);
//   } else {
//     continue;
//   }
// }
// console.log(names);


