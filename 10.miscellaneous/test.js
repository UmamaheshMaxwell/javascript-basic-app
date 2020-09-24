
// value type
var a = 10;
var b = a;
    a = 20;

console.log(a)
console.log(b)

// Reference Type 1

var a = [1,2]
var b = a
a.push(3);

console.log(a)
console.log(b)

// Reference Type 2

var a = [1,2]
var b = a;
    a = [1,2,3]

console.log(a)
console.log(b)

// string concatenation
var name ="uma" + 1 + 2;
console.log(name)

var output = 1 + 2 + "uma" + 4 + 5;
console.log(output)

// IIF Exmaple
var output = (function(x){
    delete x
    return x
})(0)

console.log(output)


var output = (function(x){
    delete x.name
    return x
})({name: 'uma'})

console.log(output)

// Deleting an object property
var obj = {
    name : 'johngalt',
    age: '25',
    city: 'goa'
}

console.log(obj)

delete obj;
delete obj.age;
delete obj.city;

obj = null;
console.log(obj)

obj = {}
obj.firstName = 'Umesh'
console.log(obj)

console.log(a=10)
console.log("10" == 10) // true
console.log("10" === 10) // false

// closure

function multiply(x){
    return function(y){
        return function(z){
            return x * y * z;
        }
    }
}



//2, 3, 4 - 24

console.log(multiply(2)(3)(4)) //24

var output1 = multiply(2);
console.log(output1)

var output2 = output1(3)
console.log(output2)

var output3 = output2(4)
console.log(output3)

// function getFullname (firstName , lastName){
//     console.log(firstName, lastName)
// }

// getFullname()

// How to empty an array ?

var array = ['a', 'b' ,'c', 'd' ,'e', 'f']

// method 1
array = []
console.log(array)

// method 2
var array = ['a', 'b' ,'c', 'd' ,'e', 'f']

array.length =0;
console.log(array)

//method 3
var array = ['a', 'b' ,'c', 'd' ,'e', 'f']

while(array.length){
    array.pop()
}
console.log(array)

// method 4
var array = ['a', 'b' ,'c', 'd' ,'e', 'f']
array.splice(0,array.length)
console.log(array)

console.log(typeof {})
console.log(typeof null)

console.log({} == null)
console.log(typeof {} == typeof null)
console.log(typeof new Array())
console.log(typeof new Date())