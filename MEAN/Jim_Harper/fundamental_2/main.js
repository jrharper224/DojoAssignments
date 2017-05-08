// function sum(x,y) {
//   var sum = 0;
//   for(var i = x; x <= y; i++ ){
//     sum = sum + x
//   }
//   console.log(sum)
// }
// sum(2,5)
//
// function min(array) {
//   var min = array [0];
//   for(var i =  1; i < array.length; i++){
//     if(array[i] < min){
//       min = array[i]
//     }
//   }
//   console.log(min);
// }
//
// min([7,4,8,10,3])
//
// function average(array) {
//   var sum = 0
//   for( var i = 0; i <array.length; i++){
//     sum = sum + array[i]
//   }
//   console.log(sum/array.length)
// }
//
// average([2,4,6,8]);

// var sumxy = function(x,y) {
//   var sum = 0;
//   for(var i = x; x <= y; i++ ){
//     sum = sum + x
//   }
//   console.log(sum)
// }
//
// var findMin = function findMin(array) {
//   var min = array [0];
//   for(var i =  1; i < array.length; i++){
//     if(array[i] < min){
//       min = array[i]
//     }
//   }
//   console.log(min);
// }
//
// var findAvg = function (array) {
//   var sum = 0
//   for( var i = 0; i <array.length; i++){
//     sum = sum + array[i]
//   }
//   console.log(sum/array.length)
// }

var person = {
  name: 'Jim',
  distance_traveled: 0,
}
function say_name() {
  console.log(person.name)
}
function say_something (a) {
  console.log(person.name + " says " + a);
}

function walk() {
  console.log(person.name + " is walking");
  person.distance_traveled +=3;
  console.log(person.distance_traveled);
}

function run() {
  console.log(person.name + " is running");
  person.distance_traveled +=10;
  console.log(person.distance_traveled);
}
function crawl() {
  console.log(person.name + " is crawling");
  person.distance_traveled +=1;
  console.log(person.distance_traveled);
}


say_name();
say_something('Hello World!')
walk();
crawl();
run();
