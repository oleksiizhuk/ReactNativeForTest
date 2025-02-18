class User {
  private _name: string
  #lastName: string

  constructor(name: string, lastName?: string) {
    this._name = name
    this.#lastName = lastName || 'lastName'
  }
  // Getter: provides read access
  get name(): string {
    return this._name
  }
  get fullName(): string {
    return `${this._name} ${this.#lastName}`
  }
  // Setter: provides controlled write access
  set name(newName: string) {
    if (newName.length < 3) {
      console.log('Name must be at least 3 characters long.')
      return
    }
    this._name = newName
  }
}
const user = new User('Alice')
console.log(user.name) // Alice
user.name = 'Bob' // Updates name
console.log(user.name) // Bob
console.log(user.fullName) // Bob lastName
user.name = 'Al' // Name must be at least 3 characters long.

export {}
