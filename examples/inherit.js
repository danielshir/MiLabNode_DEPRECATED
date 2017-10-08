class Animal {
	constructor(name) {
		this.name = name;
	}

	printName() {
		console.log("The name is " + this.name);
	}
}

class Dog extends Animal {
	constructor() {
		super("Dog");
	}

	bark() {
		console.log("Woof!");
	}
}

let dog = new Dog();
dog.printName();
dog.bark();


