function Weather(storm) {
  this.storm = storm;

  Weather.prototype.makeSunny = function() {
    return this.storm
  };

};
