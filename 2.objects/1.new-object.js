var person1 = new Object();

person1["firstName"] = "Uma";
person1["lastName"] = "Mahesh";

console.log(person1)

var firstName ="firstName"
console.log(person1[firstName])

console.log(person1["firstName"])

console.log(person1)

console.log(person1.firstName)
console.log(person1.lastName)

person1.address = new Object();

person1.address.street = "1st main"

console.log(person1)

person1.address.city = "Hyderabad"

person1.address.state ="NY"

console.log(person1.address.street);
console.log(person1.address.state);
console.log(person1.address.city)
