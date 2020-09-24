// function scoped
function sayHello(){
    if(true){
        var varName = 'uma'
    }

    console.log(varName)
}

sayHello()

// Block Scoped 

//using let
if(true){
    let letName ='Mahesh'
    console.log(letName)
}



// using const
if(true){
    const constName ='Umesh'
    console.log(constName)
}

// Both let and const are same, except the 'const' will not allow us
//  to redeclare the variable

const count1 = 1;
let count2 = 2;

 count2 =3
 count1 =4
console.log(count1)
console.log(count2)

// Connection String
// Network Folder
// Hardcoded values



