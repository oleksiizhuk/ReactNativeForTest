abstract class Shape {
  // Abstract method: must be implemented in derived classes
  abstract calculateArea(): number

  // Concrete method: shared by all subclasses
  describe(): void {
    console.log(`This is a shape with an area of ${this.calculateArea()}`)
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super()
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super()
  }

  calculateArea(): number {
    return this.width * this.height
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 20)]

shapes.forEach((shape) => shape.describe())

export {}
