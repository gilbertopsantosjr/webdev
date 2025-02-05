document.addEventListener("DOMContentLoaded", function () {
  console.log(`loaded`);
});

class Client {
  name;
  phone;
  create(name, phone) {
    if (!name) {
      throw new Error(`name is required`);
    }
    const c = new Client();
    c.name = "Soccer";
    c.phone = "123-123-123";
    return c;
  }
}
// bullet proof programming
const c = new Client();

// 10 % of OOP
class Car {
  // overload means have a another method with the same name but different parameters
  constructor(color, brand, engine, year_production, miles = 0) {
    this.color = color;
    this.brand = brand;
    this.engine = engine;
    this.year_production = year_production;
    this.miles = miles;
  }
}

class Issue {
  constructor(car, description, price) {
    if (!car) {
      throw new Error(`car is required`);
    }
    this.car = car;
    this.description = description;
    this.price = price;
  }

  //behavior or method
  getHoursWorking() {
    switch (this.description) {
      case "replace breaks":
        return 8;

      case "oil change":
        return 4;

      default:
        return 0;
    }
  }
}

const golf = new Car(`black`, `wv`, "eletric", 2023, 123);

const issue = new Issue(golf, "replace breaks", 123);
const issue2 = new Issue(golf, "oil change", 32);

console.log(issue.getHoursWorking());

class Solution {
  constructor(issues, price) {
    this.issues = issues;
    this.price = price;
  }

  getPrice() {
    let price = this.issues.reduce((acc, issue) => acc + issue.price, 0);
    let vat = price * 0.2;
    return price + vat;
  }
}

for (prop in golf) {
  console.log(`prop`, prop);
}

const s = new Solution([issue, issue2]);
console.log(`total price`, s.getPrice());
// prototype of object

const d = new Date(1980, 7, 22); // the new operator creates a new instance of class Date and that is an object in memory
console.log(d.getDate()); // the day of the month

// receive a car
// identity the issue
// price the solution
