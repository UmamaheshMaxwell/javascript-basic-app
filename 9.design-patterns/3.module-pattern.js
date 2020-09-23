// private variable
var Module = (function(){
    // private variable
    var PrivateVariable ='hello'

    // private Method
    var privateMethod = function(){

    }

    //locally scoped object

    var myObject = {
        
    };

    myObject.publicMethod1 = function(){

    }
    myObject.publicMethod2 = function(){
        
    }
    myObject.publicMethod3= function(){
        
    }

    // Anonymous Object Literal Return
    return myObject;

})();


console.log(Module)
