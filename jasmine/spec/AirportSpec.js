describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather(false);
  });

  it("can be forced to be sunny", function() {
    weather.makeSunny;
    expect(weather.storm).toBeFalsy();
  });
});
