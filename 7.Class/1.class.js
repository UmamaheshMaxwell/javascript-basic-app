// 1. declare a  class

function Student(){

}

// 2. instace of a class

function Person(){

}

var person1 =  new Person() // person1 is an instance
var person2 =  new Person() // person2 is an instance

// 3. constructor of a class

function Order(){
    console.log('this is initiated')
}

var order1 = new Order() // Order() is a constructor

// 4. property 

function Customer(gender){
    this.genderType = gender
}

 var customer1 = new Customer('Female')
 var customer2 = new Customer('Male')

console.log(customer1.genderType)
console.log(customer2.genderType)

// 5. Methods

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    // created method
    this.getFullName = function(){
        return this.firstName + '  ' + this.lastName;
    }
}

var student1 = new Student('Uma', 'Mahesh');
console.log(student1)

console.log(student1.firstName);
console.log(student1.lastName);
console.log(student1.getFullName());