(function(name){
    console.log('Hello ' + name)
})('Uma');

(function(name){
    console.log('Hello ' + name)
}('Uma'));

//(var name="uma") //Syntax Error
//(var name="unma", city="hyd") // Syntax error

// (10 >9) // Valid
if(10 > 9){
    (console.log('this is valid'))
}
