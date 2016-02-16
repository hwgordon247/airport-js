describe("Airport", function(){
	var airport;
	var plane;

	beforeEach(function(){
		airport = new Airport();
	});

	it ("starts with 0 airplanes", function(){ 
		expect(airport.dockedPlanes.length).toEqual(0);
	});

	describe("landing", function(){

		beforeEach(function(){
			airport.requestLand(plane);
		});

		it ("stores a landed plane",  function() {
			expect(airport.dockedPlanes).toContain(plane);
		});
	});

	describe("landing", function(){

		beforeEach(function(){
			airport.requestLand(plane);
			airport.requestTakeOff(plane);
		});

		it ("removes a plane after take off",  function() {
			expect(airport.dockedPlanes).not.toContain(plane);
		});
	});

});