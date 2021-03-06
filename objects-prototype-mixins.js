function mixin(target, ...source) {
  Object.assign(target, ...source)
}


function Product(price, title, description) {
  this.price = price
  this.title = title
  this.description = description
  this.makeTitle = function() {
    return `This ${this.title} course price is ${this.price}.`
  }
}

const isProduct = {
  sell() {
    return `The product with the title ${this.title} has been sold at price ${this.price}`
  },
  toString() {
    return `${this.constructor.name} ${this.title} with price ${this.price} USD (${this.priceToReais()} reais)`
  }
}

const priceToReais = {
  priceToReais() {
    const reaisRate = 5.69
    const finalReaisPrice = this.price * reaisRate
    return Math.round(finalReaisPrice * 100) / 100
  }
}

// ====

function Course(price, title, description) {
  this.price = price
  this.title = title
  this.description = description
  this.makeTitle = function() {
    return `This ${this.title} course price is ${this.price}.`
  }
}

// ==== 

function Tshirt(size, price, title, description) {
  this.size = size
  this.price = price
  this.title = title
  this.description = description
}

mixin(Course.prototype, isProduct, priceToReais)
mixin(Tshirt.prototype, isProduct, priceToReais)
//Object.assign(Course.prototype, isProduct)
//Object.assign(Tshirt.prototype, isProduct)

// ====

module.exports = {Product, Course, Tshirt}

/*
Object.assign({}, name, name)
We use this to copy the properties and methods from one object to another.
We pass an empty object as the target and pass one or more source objects. This way
the empty object will end up being a combination of the two objects.
You can also use that for constructors. Instead passing an empty object, you pass
the prototype of that constructor.
For making it more readable, you can extract the code to a function called mixin
in top of the code.
function mixin(target, ...source) {  1.rest operator
  Object.assign(target, ...source)   2.spread operator
}

Mixins give greate flexibily, because they work with composition. We design how
many objects you need and you compose it the want you need.
*/