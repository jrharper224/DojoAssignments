var empty_array = [];
var string_array = [ 'hi', 'these', 'are', 'strings'];
var x = 15;
console.log("Logging variables to the console", empty_array, string_array, x);

console.log("2nd value of string_array", string_array[1]);

console.log('string_array has a length of', string_array.length);

string_array.push('awesome');

console.log(string_array);

string_array.pop();
console.log(string_array);
