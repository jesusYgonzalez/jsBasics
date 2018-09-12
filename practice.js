//////////////////////////// FUNCTION CONSTRUCTOR ////////////////////////////

/**
 Person = function(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2018 - this.age);
  };
 Person.prototype.workPlace = 'Jpack Int.';

 Bob = new Person('bob', 1987, 'construction');

 let Jode = new Person('jode', 1966, 'doctor');

 Jode.calculateAge();
 Bob.calculateAge();

 console.log('Jode works at: ', Jode.workPlace);
 console.log(Bob.workPlace);
 console.log(JSON.stringify(Bob, undefined, 2));
 **/


//////////////////////////// Object.create ////////////////////////////
/** let personProto = {
  calculateAge: function() {
    console.log(2018 - this.age);
  }
};

 let Bob = Object.create(personProto);
 Bob.name = 'Bobby';
 Bob.age = 1987;
 Bob.job = 'Order puller';

 let jane = Object.create(personProto, {
  name: {value: 'Jane'},
  age: {value: '1966'},
  job: {value: 'assistant'}
});
 **/

//////////////////////////// Passing functions as arguements ////////////////////////////

let years = [1920, 1987, 2007, 2004, 1999];

function arrayCalc(arr, fn) {
  let arrResult = [];
  for (let i = 0; i < arr.length; i++) {
    arrResult.push(fn(arr[i]));
  }
  return arrResult;
}


function calculateAge(element) {
  return 2018 - element;
}

function drinkingAge(element) {
  return element >= 18;
}

function maxHeartRate(element) {
  if (element >= 18 && element <= 81) {
    return Math.round(206.9 - (0.67 * element));
  } else {
    return -1;
  }
}

let ages = arrayCalc(years, calculateAge);
let isDrinkingAge = arrayCalc(ages, drinkingAge);
let rate = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(isDrinkingAge);
console.log(rate);


//////////////////////////// Functions Returning Functions ////////////////////////////









