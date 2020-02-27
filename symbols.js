const _radius = Symbol()
const _draw = Symbol()

class Circle {
  constructor(radius) {
    this[_radius] = radius
  }

  [_draw] () {
    console.log("draw")
  }

}

const c = new Circle;
