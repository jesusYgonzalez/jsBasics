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

//////////////////////////// Passing functions as arguments ////////////////////////////

  /**
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
**/

//////////////////////////// CLOSURES ////////////////////////////

/**
function retirement(retirementAge) {
  let a = 'years until retirement';
  return function(yearOfBirth) {
    let age = 2018 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

let retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);

function interviewQuestion(job) {
  return function(name) {
    if (job === 'Designer') {
        console.log(name + ',' + ' what do you do? ');
    } else if ( job === 'construction') {
        console.log('what do you even do ' + name);
    } else {
      console.log('Hello' + name + 'what do you do again?');
    }
  }
}

interviewQuestion('construction')('Bob');
**/


/////////////////////////////// CHALLENGE ///////////////////////////////

// (function() { //Immediately invoked function expression (IIFE)
//
//   function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }
//
//   Question.prototype.displayQuestion = function() {
//     console.log(this.question);
//
//     for (let i = 0; i < this.answers.length; i++) {
//       console.log(i + ': ' + this.answers[i]);
//     }
//   };
//
//   Question.prototype.checkAnswer = function(ans) {
//     if(ans === this.correct) {
//       console.log('correct answer!');
//     } else {
//       console.log('wrong answer, try again');
//     }
//   };
//
//   let question1 = new Question('am I old?',
//     ['Yes', 'No']
//     , '0');
//
//   let question2 = new Question('what is your name?', ['Jesus', 'Mephesto'], 1);
//
//   let question3 = new Question('what is your DOB?', [1986, 1945], 0);
//
//
//   let questions = [question1, question2, question3];
//
//
//   let randNum = Math.floor(Math.random() * questions.length);
//
//   questions[randNum].displayQuestion();
//
//
//   let answer = parseInt(prompt('Please select the correct answer'));
//
//   questions[randNum].checkAnswer(answer);
//
// })();
//
//
//



// let date = new Date();
// let day = date.getDay();
//
// function dayOfWeek(day) {
// let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   for(let i = 0; i < weekday.length; i++ ) {
//     if (day === [i]) {
//       console.log([i]);
//     }
//   }
// }

// now = new Date();
//
// let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
// // let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
//
// let day = days[ now.getDay() ];
// // let month = months[ now.getMonth() ];
//
// console.log(day);
// // console.log(month);

class Person {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    let age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete extends Person {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const bobAthlete = new Athlete('Bob', 1987, 'Runner', 2, 15);

bobAthlete.wonMedal();
bobAthlete.calculateAge();












