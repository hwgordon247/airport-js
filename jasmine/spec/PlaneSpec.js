describe("Plane", function(){
  var plane;

  beforeEach(function() {
    plane = new Plane;
  });

  it("can land", function(){
    plane.land();
    expect(plane.isFlying).toBe(false);
  });

  it ("can't land twice", function() {
    plane.land();

    var multiLand = function() {
      plane.land();
    };

    expect(multiLand).toThrowError(TypeError, "Plane has already landed!");
  });

  it("can take off", function(){
    plane.land();
    plane.takeOff();
    expect(plane.isFlying).toBe(true);
  });

  it ("can't take off twice", function() {
    plane.land();
    plane.takeOff();
    expect(function() {plane.takeOff();}).toThrowError(TypeError, "Plane has already taken off!");
  });
});
