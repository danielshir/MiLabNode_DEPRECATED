const EventEmitter = require('events').EventEmitter;
const util = require('util');

function EachSecond() {
	EventEmitter.call(this);
}
util.inherits(EachSecond, EventEmitter);

EachSecond.prototype.start = function() {
	const self = this;
	this._id = setInterval(function() {
		self.emit('second');
	}, 1000);
};

let e = new EachSecond();
e.on('second', function() {
	console.log(new Date());
});

e.start();

