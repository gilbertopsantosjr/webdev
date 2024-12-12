class Vegetarian extends Animal {
  constructor() {
    this.vegetarian = true;
  }
}

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a noise.");
  }

  eat() {
    console.log(this.name + " I eat anything");
  }
}

class Dog extends Animal {
  speak() {
    console.log(`Dog` + this.name + " barks.");
  }
  eat() {
    console.log(`Dog` + this.name + " eats bones");
  }
}

class Cat extends Animal {
  speak() {
    console.log(`Cat` + this.name + " meows.");
  }
  eat() {
    console.log(`Cat` + this.name + " eats fish");
  }
}

class Pig extends Animal {
  speak() {
    console.log(`Pig` + this.name + " honk honk honk.");
  }
}

class Elefant extends Vegetarian {}

const dog = new Dog("Rex");
const cat = new Cat("Tom");
const pig = new Pig("Piggy");

dog.eat();
cat.eat();
pig.eat();

// is one
// has one ( )

// is dog an animal ? true
// is dog a vegetarian ? false
// is dog a carnivore ? true

// is professor a person ? true
// is professor a vegetarian ? false
