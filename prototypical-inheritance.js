// Creating you own prototypical inheritance

function Shape () {
}

Shape.prototype.duplicate = function () {
  console.log("duplicate")
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle //reset the Circle constructor

function Circle (radius) {
  this.radius = radius
}

Circle.prototype.draw = function() {
  console.log("draw")
}


const shape = new Shape()
const circle = new Circle(1)
