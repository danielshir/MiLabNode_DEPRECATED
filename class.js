function Person(name, age) { 
	this.name = name;
	this.age = age;
}

Person.prototype.printName = function() {
	console.log("The name is " + this.name);
};

Person.prototype.isOlderThan = function(age) {
	return this.age > age;
};

let p = new Person("Daniel", 10);
p.printName();

if (p.isOlderThan(90)) {
	console.log("Wow, that's old");
}


