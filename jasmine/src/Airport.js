function Airport() {
	this.dockedPlanes = [];
}

Airport.prototype.requestLand = function(plane) {
 	plane.land();
	this.dockedPlanes.push(plane);
}

Airport.prototype.requestTakeOff = function(plane) {
	plane.takeOff();
	this.dockedPlanes.splice(this.dockedPlanes.indexOf(plane), 1);
}
