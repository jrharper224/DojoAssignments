var x = [3,5, "Dojo", "rocks", "Michael", "Sensei"];

for( var i = 0; i < x.length; i++){
  console.log(x[i]);
}

x.push(100);
x = x + [ "hello", "world", "JavaScript is Fun"];
console.log(x);

var sum = 0;

for(var j = 1; j<=500; j++){
  sum = sum + j;
}
console.log(sum);

var array = [1,5,90,25,-3,0];
var min = array[0];

for(var k = 1; k < array.length; k++){
  if(array[k] < min){
    min = array[k]
  }
console.log(min);
}

var sum1 = 0;
for(var h = 0; h < array.length; h++){
  sum1 = sum1 + array[h];
}
console.log(sum1/array.length);

var newNinja = {
  name: 'Jessica',
  professoin: 'coder',
  favorite_language: 'JavaScript',
  dojo: 'Dallas'
}

for( var key in newNinja){
  console.log(key, newNinja[key]);
}
