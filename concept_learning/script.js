// ## Variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);


var name = 'John';
var age = 26;

console.log(name + age);
console.log(age + age);

var job, isMarried;

console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + 'is a ' + age + ' years old ' + job + '. Is he married? '  + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + 'is a ' + age + ' years old ' + job + '. Is he married? '  + isMarried + '.');


var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + 'is a ' + age + ' years old ' + job + '. Is he married?'  + isMarried + '.');
*/


// Operators
/*
var now = 2016;
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/


// ## If/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if(isMarried === 'yes'){
  console.log(name + 'is married!');
}
else{
  console.log(name + 'will hopefully marry soon :)');
}

isMarried = true;

if(isMarried){
  console.log('Yes!');
}
else{
  console.log('No!');
}

if(isMarried){
  console.log('Yes!');
}

if(23 === '23'){
  console.log('Something to print...')
}
*/


// Boolean logic and switch
/*
var age = 16;

if(age < 20){
  console.log('John is a teenager.');
}else if(age >= 20 && age < 30){
  console.log('John is a young man.')
}else{
  console.log('John is a man.')
}

var job = 'teacher';
job = prompt('What does john do?')

switch (job){
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('John drives a cab in Lisbon.');
    break;
  case 'cop':
    console.log('John helps fight crime.');
    break;
  default:
    console.log('John does something else.');
}
/*


// CODING CHALLENGE 1
/*
var heightJohn = 164;
var ageJohn = 31;

var heightPeter = 178;
var agePeter = 24;

var heightJessica = 159;
var ageJessica = 42;

var scoreJohn = heightJohn + 5 * ageJohn;
var scorePeter = heightPeter + 5 * agePeter;
var scoreJessica = heightJessica + 5 * ageJessica;

console.log("John:" + scoreJohn + ', Peter:' + scorePeter + ", Jessica:" + scoreJessica)

if(scoreJohn > scorePeter && scoreJohn > scoreJessica){
  console.log("John won!");
}else if(scorePeter > scoreJessica && scorePeter > scoreJohn){
  console.log("Peter won!")
}else if(scoreJohn === scorePeter === scoreJessica){
  console.log("It's a draw.")
}else{
  console.log("Jessica won!")
}
*/


// Functions
/*
function calculateAge(yearOfBirth){
  var age = 2016 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement >= 0) {
  console.log(name + ' retires in ' + retirement + ' years.');
  }else{
    console.log(name + ' is already retired.');
  }
}


yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/


// Statements and expressions
/*
//function statement
function someFun(par) {
  //code
}

// function expression
var someFun = function(par) {
  //code
}
*/


// Arrays
/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);


var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john);

if(john.indexOf('teacher') === -1){
  console.log('John is not a teacher.')
}
*/


// Objects
 /*
 var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false
 };

 console.log(john.lastName);
 console.log(john['lastName']);

 var xyz = 'job';
 console.log(john[xyz]);

 john.lastName = 'Miller';
 john['job'] = 'programmer';

 console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
*/


// Objects and methods
// v1.0
/*
 var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function(){
    return 2017 - this.yearOfBirth;
  }
 };

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
console.log(john);
*/

// v2.0
/*
var john = {
  name: 'John',
  lastName: 'Smith',
  yearOfBirth: 1990,
  job: 'teacher',
  isMarried: false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function(){
    this.age = 2016 - this.yearOfBirth;
  }
 };

 john.calculateAge();
 console.log(john);
*/


// Loops and iteration
/*
for(var i = 0; i < 10; i++){
  console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for(var i = 0; i < names.length; i++){
  console.log(names[i]);
}


for(var i = name.length - 1; i >= 0; i--){
  console.log(names[i]);
}

var i = 0;
while(i < names.length){
  console.log(names[i]);
  i++;
}


for(var i = 1; i <= 5; i++){
    if(i === 3){
    continue;
  }
  console.log(i);
}
*/


// CODING CHALLENGE 2
/*
for(var i = 0; i < birthYears.length; i++){
  ages.push(2017 - birthYears[i]);
}

for(var i = 0; i < ages.length; i++){
  if(ages[i] >= 18){
    console.log('Person ' + (i + 1) + ' is ' + ages[i] +' years old, and is of full age.');
  }else{
    console.log('Person ' + (i + 1) + ' is ' + ages[i] +' years old, and is not of full age.');
  }
}

function printFullAge(years){
  var ages = [];
  var results = [];
  for(var i = 0; i < years.length; i++){
    ages.push(2017 - years[i]);
  }

  for(var i = 0; i < ages.length; i++){
    if(ages[i] >= 18){
      results.push(true);
    }else{
      results.push(false);
    }
  }
  return results;
}
var birthYears = [1995, 1969, 1973, 2010];
full_1 = console.log(printFullAge(birthYears));
full_2 = console.log(printFullAge([2013, 1935, 2001]));

*/


// Hoisting
/*
calculateAge(1995);
function calculateAge(year) {
  console.log(2017 - year);
}

// retirement(1995);
var retirement = function functionName(year) {
  console.log(65 - (2017 - year));
}

console.log(age);
var age = 23;

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
*/


// Scoping
/*
var a = "Hello";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "John";
  // console.log(c);
  console.log(a + " " + d);
}
*/


// The this keyword
/*
calculateAge(1995);

function calculateAge(year) {
  console.log(2017 - year);
  console.log(this);
}
*/
var john = {
  name: "John",
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2017 - this.yearOfBirth);
    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }
};

john.calculateAge();

var mike = {
  name: "Mike",
  yearOfBirth: 1984,
};

mike.calculateAge = john.calculateAge;
mike.calculateAge(); 
