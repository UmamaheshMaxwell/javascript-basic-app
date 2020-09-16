// 1. Assigning the function to a variable
var sayHello = function(){
    console.log('function is assigned to a variable')
}

// 2. passing function to another function as a parameter (callback)

//var value =1
 //var value ="uma"
//var value =true;
var value = function(){
    return'I am callback !!!';
}


function CallingFunction(callback){
   return callback;
}

// 1. step1
var output1 = CallingFunction(value);
console.log(output1)

// 2. step2
var output2 = output1();
console.log(output2)


//3. creating functions on the fly // closure

//4. function can be returned from another function
function parentFunction(firstName) {
    return function (){
        return function(){
            console.log('I am callback !!!' + ' ' + firstName)
        }
    }
}

// 1.step1

var childFunction1 = parentFunction('uma')
console.log(childFunction1);

// 2.step2

var childFunction2 = childFunction1();
console.log(childFunction2)

// 3.step3
childFunction2()

// Another way
var getMessage = ((parentFunction('Uma'))())();