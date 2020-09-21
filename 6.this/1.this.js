console.log(this) // this is gloabl

function a(){
    console.log(this) // this is global
}

a()

var b = function(){
    console.log(this) // this is still global
    this.newVariable = "Welcome"   
}

b();

console.log(newVariable)

// If the value of the object is primitive then that is called property 
// if the value is a function then that is called method

var c = {
    name: 'uma',
    log: function(name) {
        var self = this;
        self.name = name;
            console.log(self);
            var setName = function (name){
                self.name = name
            }
             setName('Swathi')
            console.log(this)
    }
}

c.log('Mahesh');


// if function is outside then `this` becomes global obejct
// if function is inside the object then `this` becomes that object