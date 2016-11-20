// My Module

function SomeClass() {
	this.thing = "this is the thing";
}

SomeClass.prototype.getThing = function() {
	return this.thing;
};

module.exports = SomeClass;

