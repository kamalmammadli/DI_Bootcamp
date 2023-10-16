import persons from './data.js';

function calculateAverageAge(persons) {
    const totalAge = persons.reduce((acc, person) => acc + person.age, 0);
    const averageAge = totalAge / persons.length;
    console.log(`Yaslarin ortalamasi : ${averageAge.toFixed(2)}`);
  }
  
  // Call the function with the imported array
  calculateAverageAge(persons);