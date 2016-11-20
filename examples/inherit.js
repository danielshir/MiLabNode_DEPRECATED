const util = require('util');

function Animal(name) {
	this.name = name;
}

Animal.prototype.printName = function() {
	console.log("The name is " + this.name);
};


function Dog() {
	Animal.call(this, "A dog");
}

util.inherits(Dog, Animal);

Dog.prototype.bark = function() {
	console.log("Woof");
}

let dog = new Dog();
dog.printName();
dog.bark();


