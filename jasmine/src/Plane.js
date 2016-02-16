function Plane() {
  this.isFlying
};

Plane.prototype.land = function() {
	if (this.isFlying === false) {
		throw new TypeError("Plane has already landed!");
	}

  this.isFlying = false;
};

Plane.prototype.takeOff = function() {
	if (this.isFlying === true) {
		throw new TypeError("Plane has already taken off!");
	}
  this.isFlying = true;
};
