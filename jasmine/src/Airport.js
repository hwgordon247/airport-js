function Airport() {
	this.dockedPlanes = [];
}

Airport.prototype.requestLand = function(plane) {
	this.dockedPlanes.push(plane);
}

Airport.prototype.requestTakeOff = function(plane) {
	this.dockedPlanes.splice(this.dockedPlanes.indexOf(plane), 1);
}