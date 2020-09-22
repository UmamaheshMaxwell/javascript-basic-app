function Student(){
    this.name = 'Uma'
    this.gender = 'Male'
}

Student.prototype.age =15;

Student.prototype.getDetails = function (){
    return "Name is : " + this.name + " and age is " +  this.age
}

var student1 =  new Student();
console.log(student1.age)

var student2 = new Student();
console.log(student2.age)

console.log(student1.getDetails())
console.log(student2.getDetails())