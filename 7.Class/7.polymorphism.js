function Shape(){

}

Shape.prototype.draw = function(){
    return "this is generic shape"
}

// Circle 

function Circle(){

}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.draw = function(){
    return "I am a Circle"
}

// Sqaure 

function Sqaure(){
}

Sqaure.prototype = Object.create(Shape.prototype)

Sqaure.prototype.draw = function(){
    return "I am a Sqaure"
}

// Trinagle 

function Trinagle(){
}

Trinagle.prototype = Object.create(Shape.prototype)

// Trinagle.prototype.draw = function(){
//     return "I am a Trinagle"
// }

// var shape = new Shape();
// var circle = new Circle();
// var sqaure = new Sqaure();
// var triangle = Trinagle()


var shapes = [new Shape(), new Circle, new Sqaure(), new Trinagle()]

shapes.forEach(function(shape){
    console.log(shape.draw())
})
