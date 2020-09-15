function b(){
     var count =3;
    console.log(count);
}                          // Execution context for b

function a(){
    var count = 2;
    console.log(count)
    b();                     // Execution context for a
}

var count = 1;             // Global execution context
console.log(count)
a();                       // function Invocation
console.log(count)

