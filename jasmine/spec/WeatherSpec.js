describe("weather", function(){
	var weather;

	beforeEach(function(){
		weather = new Weather;
	});

	it("returns stormy sometimes", function() {
		spyOn(Math, 'random').and.returnValue(1);
		expect(weather.isStormy()).toBeTruthy();
	});

	it("returns sunny sometimes", function() {
		spyOn(Math, 'random').and.returnValue(0);
		expect(weather.isStormy()).toBeFalsy();
	});
});