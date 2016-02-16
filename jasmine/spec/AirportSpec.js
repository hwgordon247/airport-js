describe("Airport", function(){
	var airport;
	var plane;

	beforeEach(function(){
		weather = new Weather;
		spyOn(weather, 'isStormy').and.returnValue(false);
		airport = new Airport(weather);
		plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
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

describe('stormy', function() {
	var airport;
	var plane;

	beforeEach(function(){
		weather = new Weather;
		spyOn(weather, 'isStormy').and.returnValue(true);
		airport = new Airport(weather);
		plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
	});

	it('cannot land in a storm', function() {
		expect(function() {airport.requestLand(plane);}).toThrowError(TypeError, "Wait for storm to clear");
	});

	it('cannot take off in a storm', function() {
		airport.dockedPlanes = [plane];
		expect(function() {airport.requestTakeOff(plane);}).toThrowError(TypeError, "Wait for storm to clear");
	});
});
