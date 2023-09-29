// exercise 2

function displayStudentInfo(objUser) {
   
    const { first, last } = objUser;

    const fullName = `Your full name is ${first} ${last}`;
    return fullName;
}

const result = displayStudentInfo({ first: 'Elie', last: 'Schoppik' });
console.log(result)

// exercise 3 
const users = { user1: 18273, user2: 92833, user3: 90315 };

const userArray = Object.entries(users);

console.log(userArray);

const multipliedUserArray = userArray.map(([username, id]) => [username, id * 2]);

console.log(multipliedUserArray);

// exercise 5
class Dog {
    constructor(name) {
      this.name = name;
    }
  };
  class Labrador extends Dog {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  };

//   exercise 6

// [2] === [2] 
// {} === {}  false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)

class Animal {
    constructor(name, type, color) {
      this.name = name;
      this.type = type;
      this.color = color;
    }
  }
  
  class Mammal extends Animal {
    sound(sound) {
      return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color} and ${sound}`;
    }
  }
  
  const farmerCow = new Mammal("Lily", "cow", "brown and white");
  console.log(farmerCow.sound("moos"))