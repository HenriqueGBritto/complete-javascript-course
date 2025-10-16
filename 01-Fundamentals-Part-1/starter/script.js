// challenge 01
/* const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = (massMark / heightMark ** 2).toFixed(2);
const BMIJohn = (massJohn / (heightJohn * heightJohn)).toFixed(2);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
} */

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
/* const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n); */

//////////////////////////////////// next lecture - 21. truly and falsy values

/* const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}

const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive...");
}
 */

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀

/// CHALLENGE
/* const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoalas = (99+ 91+ 100) / 3

if (scoreDolphins>scoreKoalas){
  console.log("Dolphins win the trophy!");
} else if (scoreKoalas>scoreDolphins){
console.log("Koalas win the trophy");
} else if (scoreKoalas === scoreDolphins) { // esse bloco não seria necessario um else if, já que a unica condição restante seria os dois resutlados serem iguais
  console.log("Both win the trophy");
}

console.log(scoreDolphins, scoreKoalas);
 */
// BONUS 1
/* const scoreDolphins = (97 + 112 + 101) / 3
const scoreKoalas = (109+ 95 + 106) / 3

if (scoreDolphins>scoreKoalas && scoreDolphins>=100){
  console.log("Dolphins win the trophy!");
} else if (scoreKoalas>scoreDolphins&& scoreKoalas>=100){
console.log("Koalas win the trophy");
} else if (scoreKoalas === scoreDolphins && scoreDolphins>= 100 && scoreKoalas>=100) { // esse bloco não seria necessario um else if, já que a unica condição restante seria os dois resutlados serem iguais
  console.log("Both win the trophy");
} else{
  console.log("No one wins the trophy");
}

console.log(scoreDolphins, scoreKoalas);
 */

//PAREI NA AULA SWITCH STATEMENT
