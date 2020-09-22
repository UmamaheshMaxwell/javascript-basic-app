function Student(){
    this.name = 'Uma'
    this.gender = 'Male'
}

var student = new Student();

console.log(Student.prototype);
console.log(student.prototype)
console.log(student.__proto__)

console.log(typeof Student.prototype);
console.log(typeof student.__proto__);
console.log(Student.prototype === student.__proto__)


