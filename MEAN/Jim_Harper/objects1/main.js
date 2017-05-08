function VehicleConstructor(name, wheels, passengers, noise) {
  var vehicle = {};

  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;
  vehicle.noise = noise;

  vehicle.makeNoise = function() {
    console.log(vehicle.noise);
  }
  return vehicle
}

var Bike = VehicleConstructor("Bike", 2, 0, "ring ring!");
Bike.makeNoise();

var Sedan = VehicleConstructor("Sedan", 4, 5, "Honk Honk!");
Sedan.makeNoise();

var Bus = VehicleConstructor("Bus", 6, 0, "HONK HONK!");
Bus.pickupPassengers = function(newPassengers){
  Bus.passengers += newPassengers;
}

Bus.makeNoise();
console.log(Bus.passengers);
Bus.pickupPassengers(10);
console.log(Bus.passengers);
