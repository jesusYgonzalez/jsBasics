// ///////////////// DOM MANIPULATION ///////////////////

// document.getElementById('nameOfID');
// document.querySelector('#nameOfID');
//
// document.querySelector(".btn").addEventListener("click", () => {
//   const rollDice = Math.floor(Math.random() * 6) + 1;
//   console.log(rollDice);
// });
//
// //hide and show dom element
// document.querySelector(".dice").style.display = "none";
// document.querySelector(".dice").style.display = "block";
//
// //How to get images and display them
// const DOMElement = document.querySelector(".dice");
// DOMElement.src = "image-" + dice + ".png";
//
//
// //Turnary Operator
// //////////////////Then                //OR
// activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
//
// //Same as this
// if (activePlayer === 0) {
//   activePlayer = 1;
// } else {
//   activePlayer = 0;
// }

// ///////////////// ES6 /2015 ///////////////////
// /// ARROW FUNCTIONS /////

// const years = [1890, 1983, 1990, 1986];

// ES5
// var ages5 = years.map(function(element) {
//   return 2018 - element;
// });
// console.log(ages5);

// ES6
// get access to element, index and the array itself
// let ages6 = years.map(el => 2018 - el);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
//
// ages6 = years.map((el, index) => {
//   const now = new Date().getFullYear();
//   const age = now - el;
//   return `Age element ${index + 1}: ${age}`;
// });
// console.log(ages6);

// DESTRUCTURING - extract data from an object or an array
// const [name, age, gender, profession] = [
//   "Chuy",
//   32,
//   "Male",
//   "Warehouse worker"
// ];
// console.log(name, age, gender, profession);

// const obj = {
//   firstName: "Chuy",
//   lastName: "Gonzalez"
// };
//
// const { firstName, lastName } = obj;
// console.log(obj);

// Calculate age until retirement
// function calcRetirementAge(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }
// const [age2, retirement] = calcRetirementAge(1986);
// console.log(age2, retirement);

// Function to calculate your retirement age based on your birth year
// function enterAge4Retirement(personAge) {
//   const myAge = new Date().getFullYear() - personAge;
//   return `You will be able to retire in the year ${myAge + 65}!`;
// }
// console.log(enterAge4Retirement(32));

// Function to calculate your retirement age based on your age
// const yearsTilYouRetire = (year2) => {
//   const age = new Date().getFullYear();
//   const retire = new Date().getFullYear() + 62 - year2;
//   return `You have ${retire - age} years until you can start your retirement!!!`;
// };
// console.log(yearsTilYouRetire(32));

// ----------------------------------------------------------------------------//
// ARRAYS

// const squares = document.querySelectorAll('.square');
//
// const squareArray = Array.from(squares);
// squareArray.forEach(cur => cur.style.backgroundColor = 'blue');
//
// for (const cur of squares) {
//   if (cur.className === 'square 1') {
//     continue;
//   }
//   cur.textContent = 'I changed color!';
// }
//
//
// let ages = [21, 34, 32, 19, 22];

// console.log(ages.findIndex(cur => cur > 21));
// console.log(ages.find(cur => cur >= 19));

// ----------------------------------------------------------------------------//
// SPREAD OPERATOR

// const addFourAges = (a, b, c, d) => {
//   return a + b + c + d;
// };
//
// const sum1 = addFourAges(12, 29, 32, 24);
// console.log(sum1);
//
// var ages = [12, 29, 32, 24];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);
//
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['Bob', 'Sarah', 'Timmy'];
// const familyJones = ['Tom', 'Susan', 'Bobby'];
// const families = [...familyJones, ...familySmith];
// console.log(families);
//
//
// const h = document.querySelector('h1');
// const squares = document.querySelectorAll('.square');
//
// const all = [h, ...squares];
// Array.from(all).forEach(cur => cur.style.color = 'purple');

// ----------------------------------------------------------------------------//
// FUNCTION PARAMETERS

// function isFullAge(...years) {
//   years.forEach(cur => console.log((2018 - cur) >= 18));
//
// }
// isFullAge(1992, 1999, 2006);

// function isFullAge(limit, ...years) {
//   years.forEach(cur => console.log((2018 - cur) >= limit));
//
// }
// isFullAge(17, 1992, 1999, 2006, 2001, 1976);

// ----------------------------------------------------------------------------//
// DEFAULT PARAMETERS

// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// }
//
// const john = new SmithPerson('John', 1998);
// const emily = new SmithPerson('Emily', 1972, 'Diaz');

// ----------------------------------------------------------------------------//
// MAPS
// in maps not just strings are valid but also booleans, numbers, strings and objects
//
// const question = new Map();
//
// //Key Value pair
// question.set('question', 'what is the official name of the latest major JavaScript version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('correct', 3);
//
// question.set(true, 'Correct answer!');
// question.set(false, 'Wrong, please try again');
//
// console.log(question.get('question'));
// // console.log(question.size);
//
// if (question.has(4)) {
// question.delete(4);
// console.log('Answer 4 is here');
// }
// question.clear();

// question.forEach((value, key) => console.log(`this is ${key}, and its set to ${value}`));

// Returns all entries of questions Map
// then use destructuring to store the key and values.. in to separate values
// for (let [key, value] of
//   question.entries()) {
//   if (typeof (key) === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
//
// const ans = parseInt(prompt('Write the correct answer'));
//
// console.log(question.get(ans === question.get('correct')));

// ----------------------------------------------------------------------------//
// CLASSES
//
// class Person {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//
//   calculateAge() {
//     let age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
//
// }

// const john = new Person('John', 1990, 'carpenter');
//
// class Worker extends Person(name, yearOfBirth, job, subject, hour) {
//   constructor(name, yearOfBirth, job){
//     super(name, yearOfBirth, job));
//       this.subject = subject;
//       this.hour = hour;
//   }
// }

// MAPS!!!

// const map1 = new Map();
//
// const obj = {
//   one: 'objects have key value pairs too',
//   two: 'cus i need more stuff here',
//   three: 'im kinda learning this'
// };
//
// map1.set(obj, "this the value for the empty object");
// map1.set(1, "what is going on here?");
// map1.set(2, "befast!");
// map1.set(3, "the doors rule");
//
// for (let [key, value] of map1) {
//   console.log(`this is the key: ${key}, and this is the value: ${value}`);
// }

// Async practice

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const stuff = [1, 2, 3];
//     resolve(stuff);
//   }, 1000);
// });
//
// const getRecipe = infoID => {
//   return new Promise((resolve, reject) => {
//     setTimeout(id => {
//       const recipe = {
//         title: 'bitch lasagna',
//         cook: 'Pewds'
//       };
//       resolve(`${id}: ${recipe.title}, the cook's name is: ${recipe.cook}`);
//     }, 1000, infoID);
//   });
// };
//
// const getCook = publisher => {
//   return new Promise((resolve, reject) => {
//     setTimeout(pub => {
//       const recipe = {
//         title: 'pizza',
//         cook: 'gonzo'
//       };
//       resolve(`the cook for this recipe is ${pub}, he made ${recipe.title}`);
//     }, 1000, publisher);
//   });
// };
//
// promise1
//   .then(ids => {
//     console.log(ids);
//     return getRecipe(ids[1]);
//   })
//   .then(result => {
//     console.log(result);
//     return getCook('gonzo');
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => console.log("Error!"));

// //Ternary Operator
// //////////////////Then                //OR
// activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);\
// const gradeCalc = (score, total) => {
//   const percent = (score / total) * 100;
//   if (percent >= 90) {
//     return `your got an A! ${percent}`;
//   }
// };

// const result = gradeCalc(13, 20);
// console.log(result);


// const mybook = {
//   title: '1984',
//   author: 'George Orwell',
//   pageCount: 234
// }

// console.log(mybook)


// let conversion = (farenheit) => {
//   return {
//     farenheit: 50,
//     celcius: (farenheit - 32) * (5 / 9),
//     kelvin: (farenheit + 459.67) * (5 / 9)
//   }

// }
// let result = conversion(74);
// console.log(result);

/////////////////////////////
// let chuyAccount = {
//   name: 'Chuy',
//   income: 0,
//   expense: 0
// }

// let addIncome = (account, amount) => {
//   account.income = account.income + amount;
// }
// let addExpenses = (account, amount) => {
//   account.expense = account.expense + amount;
// }
// let resetAccount = (account) => {
//   account.expense = 0
//   account.income = 0
// }
// let getAccSummary = (account) => {
//   let balance = account.income - account.expense;
//   return `Account for ${account.name} has $${balance} in balance. $${account.income} in income. and $${account.expense} in expenses`
// }

// addIncome(chuyAccount, 6000)
// addExpenses(chuyAccount, 300)
// addExpenses(chuyAccount, 150)

// console.log(getAccSummary(chuyAccount))
// resetAccount(chuyAccount)
// console.log(getAccSummary(chuyAccount))


// let restaurant = {
//   name: 'ASB',
//   guestCapacity: 75,
//   guestCount: 0,
//   checkAvailability: function(partySize) {
//     let seatsLeft = this.guestCapacity - this.guestCount
//     return partySize <= seatsLeft
//   },
//   seatParty: function (partySize) {
//     this.guestCount = this.guestCount + partySize
//   },
//   removeParty: function(partySize) {
//     this.guestCount = this.guestCount - partySize
//   }
// }

// restaurant.seatParty(72)
// console.log(restaurant.checkAvailability(4))
// restaurant.removeParty(5)
// console.log(restaurant.checkAvailability(4))

///////////////////////////////////////////

// let isValidPassword = (arguement) => {
//   console.log(arguement)
//   console.log(arguement.includes('password'))
//   console.log(arguement.length > 8)
// }
// let isValidPassword = (arguement) => {
//   return arguement.length > 8 && !arguement.includes('password')
// }

// console.log(isValidPassword('abc123!@#'))
// console.log(isValidPassword('asdfas'))
// console.log(isValidPassword('somethingasfasdfpassword'))

////////////////////////////////////////

// let randomNumber = (guess) => {
//   let min = 1
//   let max = 5
//   let answer = Math.floor(Math.random() * (max - min + 1) + min )
//   // if(answer === guess) {
//   //   console.log(`you have guessed Correctly!!!`)
//   // }
//   // console.log(`your guess was ${guess}, the correct answer is ${answer}`)
//   return guess === answer
// }
// randomNumber(1)

////////////////////////////////////////

// const notes = [
//   {
//     title: 'my first title',
//     body: 'my first body'
//   },
//   {
//     title: 'code code code',
//     body: 'at least an hour a day'
//   },
//   {
//     title: 'not going to fail',
//     body: 'even if it takes me a long time'
//   },
//   {
//     title: 'have to keep going',
//     body: 'never give up! fighting!'
//   }
// ]

// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
// }

// const findNote = (notes, noteTitle) => {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }

// const note = findNote(notes, 'have to keep Going')
// console.log(note)

/////////////////////////////////////////////////////////////

// const todos = [
//   {
//     title: 'Order cat food',
//     completed: true
//   },
//   {
//     title: 'clean kitchen',
//     completed: false
//   },
//   {
//     title: 'buy food',
//     completed: true
//   },
//   {
//     title: 'exercise',
//     completed: false
//   }
// ]


// const sortCompleted = (todos) => {
//   todos.sort((a, b) => {
//     if (a.completed < b.completed) {
//       return -1
//     } else if (b.completed < a.completed) {
//       return 1
//     } else {
//       return 0
//     }
//   })
// }
// const sortCompleted = (todos) => {
//   todos.sort((x, y) => {
//     return (x.completed === y.completed)? 0 : x.completed ? -1 : 1;
//   })
// }
// const sortCompleted = (todos) => {
//   todos.sort((x, y) => {
//     return (x.completed === y.completed)? 0 : x.completed ? 1 : -1;
//   })
// }

// sortCompleted(todos)
// console.table(todos)


// const getToDos = function (todos) {
//   return todos.filter(function (todo, index) {
//     return !todo.completed
//   })
// }
// console.log(getToDos(todos))

// const deleteTodo = (todos, titleDelete) => {
//   const deleteText = todos.findIndex(function(todo) {
//     return todo.text.toLowerCase() === titleDelete.toLowerCase()
//   })
//   if(deleteText > - 1) {
//     todos.splice(deleteText, 1)
//   }
// }
// deleteTodo(todos, 'buy food')
// console.log(todos)

// const findNote = function (notes, noteTitle) {
//   return notes.find(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
// }

////////////////////////////////////////////////////////////

// const array = ['fruit', 'yogurt', 'laptop', 'car']

// const filterFunc = (query) => {
//   return array.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
// }
// console.log(filterFunc('fruit'))

// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
// const filterItems = (query) => {
//   return fruits.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
// };

// console.log(filterItems('ap')); // ['apple', 'grapes']
// console.log(filterItems('an')); // ['banana', 'mango', 'orange']

//////////////////////////////////////// FILTER

// const notes = [
//   {
//     title: 'dont be the first title of the new note',
//     body: 'the second arguement of the body'
//   },
//   {
//     title: 'bake the natio out',
//     body: 'daily taking out doggo'
//   },
//   {
//     title: 'a remember to code every new day',
//     body: 'at least one hour i should do so'
//   },
// ]

// const sortNotes = (notes) => {
//   notes.sort((a,b) => {
//     if (a.title.toLowerCase() < b.title.toLowerCase()) {
//       return -1
//     } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
//       return 1
//     } else {
//       return 0
//     }
//   })
// }
// // sortNotes(notes) 
// // console.table(notes)

// const findNote = (notes, noteTitle) => {
//   return notes.find((note, index) => {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
// }

// const findNotes = (notes, query) => {
//   return notes.filter((note, index) => {
//     const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//     return isTitleMatch || isBodyMatch
//   })
// }
// console.log(findNotes(notes, 'doggo'))















