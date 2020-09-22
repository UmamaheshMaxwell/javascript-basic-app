function Person(){
    this.firstName = 'Uma'
    this.lastName = 'Mahesh'
}

Person.age = 15

console.log(Person.age)

Person.getFullName = function(firstName, lastName){
    console.log('This is defined on function');
    return firstName + ' ' + lastName
}

Person.prototype.sayHello = function(){
    return 'Hey, how are you ?'
}

Person.prototype.getFullName = function(){
    console.log('This is defined using prototype');
    return this.firstName + ' ' + this.lastName;
}

var personObj = new Person();

console.log(personObj.firstName)
console.log(personObj.lastName)
console.log(personObj.getFullName())
console.log(personObj.sayHello())

console.log(Person.getFullName('Uma', 'Mahesh'));



