function Airport(weather) {
	this.dockedPlanes = [];
	this.weather = weather;
}

Airport.prototype.requestLand = function(plane) {
	if (this.weather.isStormy()) {
		throw new TypeError("Wait for storm to clear");}
 	plane.land();
	this.dockedPlanes.push(plane);
}

Airport.prototype.requestTakeOff = function(plane) {
	if (this.weather.isStormy()) {
		throw new TypeError("Wait for storm to clear");}
	plane.takeOff();
	this.dockedPlanes.splice(this.dockedPlanes.indexOf(plane), 1);
}
