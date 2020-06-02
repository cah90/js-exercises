const {Product, Tshirt, Course} = require('../objects-prototype-polymorphism')

test('checks if sell() has the correct outputs for each object', () => {

  const objects = [
    new Course(10, "Node", "Learn fast"),
    new Tshirt('S', 10, "JS", "Good course"),
    new Tshirt('M', 25, "Python", "The best course in the field"),
    new Product(10, "Node", "Learn fast")
  ]
  
  for (let object of objects) {
    object.sell()

    expect(object.sell()).toEqual([
      [
        "The product with the title Node has been sold at price 10",
        "The author for the course Node needs to be paid his author fee."
      ],
      
        "The product with the title JS has been sold at price 10",
      
        "The product with the title Python has been sold at price 25",
      
        "The product with the title Node has been sold at price 10"
      ])
    }
  })
  
