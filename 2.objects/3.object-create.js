var person1 = Object.create(null); // Object without prototype
console.log(person1)

var person = {firstName: 'uma', lastName: 'Mahesh'}

var person2 = Object.create(person);
console.log(person2)