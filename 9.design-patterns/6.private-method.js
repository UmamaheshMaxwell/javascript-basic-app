// private variable
var Module = (function(){
    // private variable
    var PrivateVariable ='hello'

    // private Method
    var privateMethod = function(message){
        console.log('you have called private method')
        console.log(message)
    }

    var publicMethod = function(message){
        privateMethod(message)
    }

    // Anonymous Object Literal Return
    return {
        sayHello: publicMethod
    }

})();


console.log(Module.sayHello('Hello Uma'))