// alert("Great, this file is correctly being required");

var FizzBuzz = function() {

};

FizzBuzz.prototype.divisibleByThree = function(number) {
  return number % 3 === 0;
};

var f;

f = new FizzBuzz();

var number = prompt("Please enter a number");

// alert("You have entered the number " + number);

number = parseInt(number);

// alert("Now the number " + number + " becomes a int instead of string");

if f.divisibleByThree(number)
{
  alert("The number " + number + "is divisible by three");
}