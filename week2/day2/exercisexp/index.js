// exercise1//

// let x = 9;
// let y = 3;
// if(x>y){
//    console.log("x is the biggest number")
// }

// exercise2
// Create a variable called newDog where it’s value is “Chihuahua”.

// let newDog = "Chihuahua"
// // Check and display how many letters are in newDog.//
// console.log(newDog.length)

// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).//

// console.log(newDog.toUpperCase());
// console.log(newDog.toLowerCase());

// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

//  newDog == "Chihuahua"
// if(newDog == "Chihuahua"){console.log("I love Chihuahuas, it’s my favorite dog breed")  }
// else{console.log("I dont care, I prefer cats") }

// exercise3 //

// let number = prompt("Please type a number")
// if(number%2 == 0 ){console.log(number+" is an even number")}

// else{console.log(number+" is an odd number")}
// exercise 4 //


const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
if(users.length == 0)
{console.log(users+"no one is online")}
else if(users.length == 1)
{console.log("<name_user> is online")}
else if(users.length == 2)
{console.log("<name_user1> and <name_user2> are online")}
else
 {console.log(users[0] +" ,"+ users[1] +" and "+ (users.length - 2)+" more users are online" )}

//  !!! userleri adlarini daxil etmelisen <name_user1> bu hisselere
 
//  `nese text ${users.length+25}`
// end