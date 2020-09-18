var person1 = {firstName: 'Uma', lastName: 'Mahesh'};

var person2 = {firstName:'Jagrav', lastName: 'Swathi'}

function getName(message, city) {
    return message + ' to ' + city + ' ' + this.firstName + ' ' + this.lastName;
}

// bind
var getFullName = getName.bind(person1)('Welcome', 'Hyderabad' )
console.log(getFullName)

var getFullName2 = getName.bind(person1)
console.log(getFullName2('Welcome', 'Hyderabad'))

var getFullName3 = getName.bind(person1)('Welcome', 'Hyderabad' )
console.log(getFullName3)

// call

var data1 = getName.call(person2, "Welcome", "Hyderbad")
console.log(data1)

// apply

var data2 = getName.apply(person1, ["Welcome", "Hyderbad"])
console.log(data2)



