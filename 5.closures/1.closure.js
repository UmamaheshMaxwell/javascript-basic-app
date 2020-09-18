function greet(message){
    return function(name){
        console.log(message + ' ' + name)
    }
}

//greet('Hello')("Uma")

var sayHello = greet('Hello')
console.log(sayHello)

// closure - child function having access to parent function variables
sayHello('uma') 


function sendMessage(message){
    return function(name){
       return function(city){
        console.log(message + ' ' + name + ' to ' + city);
       }
    }
}

sendMessage('Welcome')('Uma')('Bangalore')