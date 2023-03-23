// ADDING BATCHES TOGETHER****

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log (count)

//CONVERTING MY AGE TO DOG YEARS *****

// let myAge = 30
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio
// console.log (myDogAge)

// COUNTS FOR  BONUS POINTS*****

// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// CREATING A FUNCTION THAT ADDS SOME VARIABLES TOGETHER*****

// let lap1 = 34;
// let lap2 = 35;
// let lap3 = 36;

// function lapSum() {
//   const sumOfLaps = lap1 + lap2 + lap3;
//   console.log(sumOfLaps);
// }

// lapSum();

//CALLING A FUNCTION MORE THAM ONCE*******

// let lapsCompleted = 0;

// function lapsIncrement() {
//   lapsCompleted = lapsCompleted + 1;
// }

// lapsIncrement();
// lapsIncrement();
// lapsIncrement();

// console.log(lapsCompleted);

// THIS IS THE CODE FOR THE GREETING AT THE TOP OF THE PAGE*****

let welcomeEl = document.getElementById("welcome-el");

let name = "Fisayo";
let greeting = "Welcome back! ";

welcomeEl.innerText = greeting + name;

// console.log (welcomeEl)

// CODE THAT EXECUTES THE PASSENGER COUNTER *******

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
// console.log (saveEl)

let count = 0;
function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

function save() {
  let saveCount = " " + count + " - ";
  saveEl.textContent = saveEl.textContent + saveCount;
  countEl.textContent = 0;
  count = 0;
}

function errorMessage() {
  let error = document.getElementById("error");
  error.textContent = "Something went wrong, please try again.";
} 

// save();

// PRACTICE PRACTICE PRACTICE *****^^^^^^

// PRACTICING WITH CONCATENATION IN A FUNCTION

// let this_name = "Linda"
// let this_greeting = "Hi there"

// function greetLinda () {
//   let greetings = this_greeting + "," + " " + this_name + "!"
//   console.log (greetings)
// }
// greetLinda ()

// PRACTICING WITH MORE THAN ONE FUNCTIONS *******

// let myPoints = 3

// function add3Points (){
//   let addedPoints = myPoints + 3
//   // myPoints = addedPoints
//   console.log (addedPoints)

// }

// function remove1Point (){
//   let  subtractedPoints = myPoints - 1
//   myPoints = subtractedPoints
//   // console.log (subtractedPoints)
// }

// add3Points ()
// add3Points ()
// add3Points ()
// remove1Point ()
// remove1Point ()

// console.log (myPoints)

//OR

// let myPoints = 3

// function add3Points (){
//   myPoints += 3
// }

// function remove1Point (){
//   myPoints -= 1
// }

// add3Points ()
// add3Points ()
// add3Points ()
// remove1Point ()
// remove1Point ()

// console.log (myPoints)

//FUNCTION FOR ERROR MESSAGE BY MANIPULATING THE DOM



