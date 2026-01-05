class Animal {
  constructor(public name: string, public age: number) {}

  describe(): void {
    console.log(`${this.name} is ${this.age} years old.`)
  }
}

class Dog extends Animal {
  constructor(name: string, age: number, public breed: string) {
    // Call the parent class constructor
    super(name, age)
  }

  describe(): void {
    // Extend behavior from the parent class
    super.describe()
    console.log(`${this.name} is a ${this.breed}.`)
  }
}

const myDog = new Dog('Buddy', 3, 'Golden Retriever')
myDog.describe()
// Output:
// Buddy is 3 years old.
// Buddy is a Golden Retriever.

export {}
