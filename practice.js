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

// class Person {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     let age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
// }
//
// class Athlete extends Person {
//   constructor(name, yearOfBirth, job, olympicGames, medals) {
//     super(name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
//   }
//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }
//
// const bobAthlete = new Athlete('Bob', 1987, 'Runner', 2, 15);
//
// bobAthlete.wonMedal();
// bobAthlete.calculateAge();


class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }
  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(`${this.name} has a tree density of ${density} trees per square mile`);
  }
}

class Street extends Element{
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street`);
  }

}

const allParks = [
  new Park('Green Park', 1999, 0.4, 233),
  new Park('Big Park', 1928, 1.5, 155),
  new Park('Olden Park', 1909, 5.5, 3898),
];

const allStreets = [
  new Street('Bellevue Avenue', 1997, 1.4, 2),
  new Street('Tiger Avenue', 2009, 3.4),
  new Street('Bellevue Avenue', 1897, 0.4, 1),
  new Street('Santa Monica Boulevard', 1933, 0.4, 1),
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log('----------Parks Report--------------');
  //Density
  p.forEach(el => el.treeDensity());

  //Average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avAge} years`);

  //Which has > 1k trees?
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees`);

}

function reportStreets(s) {
  console.log('----------Streets Report--------------');
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(`Our ${s.length} streets have a total length of ${totalLength} mi, with an average of ${avgLength}`);

  s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);















