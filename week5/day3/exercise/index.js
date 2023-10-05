// function compareToTen(num) {
//     return new Promise((resolve, reject) => {
//         if (num <= 10) {
//             resolve(`${num} is less than or equal to 10`);
//         }else {
//             reject(`${num} is greater than 10`);}}
// )}
//   compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

//   compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// //   exercise 2

// function time() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("success");
//       }, 4000);
//     });
//   }
  
 
//   time()
//     .then((result) => {
//       console.log(result);
//     })
    

    // exercise 3

    // let promise = Promise.resolve(3)
    // promise.then((result) => {
    //     console.log(result);
    //   });

    let promise = Promise.reject("Boo!")
    promise.catch(error => 
        console.log(error))
