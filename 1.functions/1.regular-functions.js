function sayHello(){
    console.log('Hello Everybody !!!');
}

sayHello();

function getFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName)
    return firstName + ' ' + lastName;
   // console.log('This is after return statement'); no valid or of no use
}

var fullName = getFullName('Uma', 'Mahesh');
console.log(fullName)