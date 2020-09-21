var person = {
    firstName: 'Uma',
    lastName: 'Mahesh',
    city : 'Bangalore'
}

// console.log(person) // CRUD 

// person.age = 36;
// console.log(person)

// person.firstName = 'Jagrav';
// console.log(person)

// delete person.age;
// console.log(person);

/*
 1. Object.preventExtensions() - Can edit and delete the properties 
                                 but can't add new properties
 2. Object.seal() - can edit the properties but can't add or delete
 3. Object.freeze() - Can't add, update and delete 
*/

//1. Object.preventExtensions()

var preventObject = {
    name: 'Uma',
    city: 'Hyderbad',
    age: 25
}
Object.preventExtensions(preventObject)

preventObject.email = 'uma@mahesh.com' // add
preventObject.name='Umesh' // update
delete preventObject.age // delete

console.log(preventObject);


// 2. Object.seal()

var sealObject =  {
    name: 'Uma',
    city: 'Hyderbad',
    age: 25
}

Object.seal(sealObject);
sealObject.email = 'uma@mahesh.com' // add
sealObject.name='Umesh' // update
delete sealObject.age // delete

console.log(sealObject)

// 3.Object.freeze()

var freezeObject =  {
    name: 'Uma',
    city: 'Hyderbad',
    age: 25
}

Object.freeze(freezeObject);
freezeObject.email = 'uma@mahesh.com' // add
freezeObject.name='Umesh' // update
delete freezeObject.age // delete

console.log(freezeObject)