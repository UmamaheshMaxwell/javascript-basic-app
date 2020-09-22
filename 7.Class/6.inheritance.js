function Person(firstName, lastName) {
    this.firstName = firstName || 'Uma'
    this.lastName = lastName || 'Mahesh'
}

Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
}

function Student(age){
    this.age = age || 37;
}

// Inherit the properties from Parent
Student.prototype = new Person();

Student.prototype.getAge = function(){
    return this.age;
}

var studentObj = new Student();

console.log(studentObj.firstName)
console.log(studentObj.lastName)
console.log(studentObj.age)
console.log(studentObj.getFullName())
console.log(studentObj.getAge())