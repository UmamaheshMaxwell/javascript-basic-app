// private variable
var Module = (function(){
    // private variable
    var PrivateVariable ='hello'

    // private Method
    var privateMethod = function(){

    }

    //locally scoped object

    var myObject = {
        
        publicMethod1 = function(){

        },
        publicMethod2 = function(){
            
        },
        publicMethod3= function(){
            
        }
    };



    // Anonymous Object Literal Return
    return myObject;

})();


console.log(Module)
