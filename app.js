class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    }

    assignOwner(person) {
        if (person instanceof Person && person.age >=18) {
            this.owner = person;
        } else {
            console.log('Owner must be at least 18 years old');
        }
    }

    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, License plate: ${this.licensePlate}`);
        if (this.owner) {
            this.owner.displayInfo();
        } else {
            console.log('No owner assigned');
        }
    }
}

let person1 = new Person('Michael', 30);
let person2 = new Person('Lusi', 16);

let car1 = new Car('Wolksvagen', 'Passat', '2020', 'AH1010');
let car2= new Car('Fiat', 'series 500', '2018', 'BH1245');

car1.assignOwner(person1);
car2.assignOwner(person2);

car1.displayInfo();
car2.displayInfo();