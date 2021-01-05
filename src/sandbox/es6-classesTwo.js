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

//!subclasses

const stephen = new Person("Stehen Missah", 30);

console.log(stephen.getDescription);

class Student extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
  hasJob() {
    return !!this.job;
  }
}
const Hanna = new Student("Hanna", 50, "Police Woman");

console.log(Hanna.getDescription);
console.log(Hanna.hasJob);

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  homeLocationSet() {
    return !!this.homeLocation;
    //! this technique is used to make things return true or false
  }

  getDescription() {
    let description = super.getDescription();

    if (this.homeLocation) {
      description + ` My home location: ${this.homeLocation}`;
    }
    return description;
  }
}

const jonas = new Traveller("jonas slim", 18, "London");

console.log(jonas.getDescription);
