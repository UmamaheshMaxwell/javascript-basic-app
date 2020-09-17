function Student(fname, lname){
    this.firstName = fname;
    this.lastName = lname;
}

var student1 = new Student()
console.log(student1)

var student2 = new Student("jagrav")
console.log(student2)

var student2 = new Student("jagrav", "Swathi")
console.log(student2)