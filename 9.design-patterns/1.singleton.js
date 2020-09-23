var Singleton = (function(){
    
    var instance = null;

     // create two methods
     // 1. create Instance
     // 2. get Instance

     var createInstance = function(){
         var obj = Object.create(null)
         console.log('instance is created')
         return obj;
     }

     return {
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
   
            return instance;
        }
     };
    
})()


var obj1 = Singleton.getInstance()
var obj2 = Singleton.getInstance()
console.log(obj1)
console.log(obj2)



