function FizzBuzz() {
  this.respond = function(i) {
    return i % 3 === 0;
  };
};

var fizzbuzz = new FizzBuzz;

var a = prompt("Please enter a number");

a = parseInt(a);

var output = fizzbuzz.respond(a).toString();

alert("Divisible by 3? " + output);