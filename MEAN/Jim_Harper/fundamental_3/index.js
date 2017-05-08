function createPerson(name, distance_traveled) {
  var person = {}
   person.name = name,
   person.distance_traveled = 0,


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
}

createPerson(Jim, 0);
console.log(person.name)
