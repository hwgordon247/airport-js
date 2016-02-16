describe("Plane", function(){
  var plane;

  beforeEach(function() {
    plane = new Plane;
  });

  it("is initially flying", function(){
    expect(plane.isFlying).toBe(true);
  });

  it("can land", function(){
    plane.land();
    expect(plane.isFlying).toBe(false);
  });

  it("can take off", function(){
    plane.land();
    plane.takeOff();
    expect(plane.isFlying).toBe(true);
  });

});
