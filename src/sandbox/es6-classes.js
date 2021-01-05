//!Classes are blueprints
console.log("test");
class Person {
  constructor(name = "Anonymous", age = 2) {
    this.name = name;
    this.age = age;
  }

  //dont need const to initate fucntion - dont even need an arror function methodnme(){}
  getDescription() {
    return ` Hello ${this.name}, today you are ${this.age} years old!`;
  }
}

const stephen = new Person("Stehen Missah", 30);

console.log(stephen.getDescription);
