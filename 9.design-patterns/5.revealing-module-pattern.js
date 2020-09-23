// private variable
var Module = (function(){
    // private variable
    var PrivateVariable ='hello'

    // private Method
    var privateMethod = function(){

    }

    var publicMethod1= function(){
        
    }
    var publicMethod2= function(){
                 
    }
    var publicMethod3=  function(){
                 
    }

    // Anonymous Object Literal Return
    return {
        add: publicMethod1,
        substract: publicMethod2,
       // multiply: publicMethod3
    }

})();


console.log(Module)