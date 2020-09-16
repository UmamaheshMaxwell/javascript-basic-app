var getName = function (){
    console.log('Hello Team Naresh !!! ')
    return 'this is anonymous function'
}

console.log(getName())

console.log(getName)

setTimeout(getName, 2000)


var getFullName = function(firstName, lastName) {
    return firstName + ' ' + lastName;
}

var fullName = getFullName('Uma', 'Mahesh');

console.log(fullName)