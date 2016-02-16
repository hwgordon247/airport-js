describe("Feature", function(){

	var plane;
	var airport;

	beforeEach(function() {
    plane = new Plane;
		weather = new Weather;
		spyOn(weather, 'isStormy').and.returnValue(false);
   	airport = new Airport(weather);
  });

	it ("changes status", function(){
		airport.requestLand(plane);
		expect(plane.isFlying).toBe(false);
		airport.requestTakeOff(plane);
		expect(plane.isFlying).toBe(true);
	})

	it ("it is the correct plane", function(){
		plane2 = new Plane;
		airport.requestLand(plane);
		airport.requestLand(plane2);
		expect(airport.dockedPlanes).toContain(plane);
		expect(airport.dockedPlanes).toContain(plane2);
		airport.requestTakeOff(plane2);
		expect(airport.dockedPlanes).not.toContain(plane2);
	})

});
