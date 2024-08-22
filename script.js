// Complete the js code
function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor with make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Output: Ferrari Testarossa
console.log(car.getTopSpeed());