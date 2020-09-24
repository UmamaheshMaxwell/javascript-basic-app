var message = function(){
    return "Hello World"
}

console.log(message())

// fat arrow function
var message = () => {
    return "Hello World"
}

console.log(message())

// if you are returning a singe value

var message = () =>  "Hello World";
console.log(message())


var message = (name) => "Hello " + name
console.log(message("Umesh"))

var message = name => "Hello " + name
console.log(message("Who is Johngalt ?"))
