//variabler & if , switch ternarys----------------------------------------

// let a = 10;
// let b = 20;

// if (a > b) {
//   console.log("a is bigger then a");
// } else if (a === b) {
//   console.log("they are equal");
// } else {
//   console.log("b is bigger then a");
// }
// let a = "apple";
// let b = "pear";
// if (a === b) {
//   console.log("a is same as b");
// } else {
//   console.log("they are not the same");
// }
// const number1 = prompt("skriv in ett värde");
// const number2 = prompt("skriv in ett värde till");

// if (number1 > number2) {
//   console.log(`the first number :${number1} is the biggest`);
// } else if (number2 > number1) {
//   console.log(`the second number :${number2} is the biggest`);
// } else {
//   console.log(
//     `the first number :${number1} and the second number : ${number2} are equal`
//   );
// }

// const number = prompt("skriv in ett värde");
// if (number % 2 === 0) {
//   console.log("det är jämnt nummer");
// } else {
//   console.log("det är INTE jämnt");
// }
// const acceptedHeight = 150;

// if (acceptedHeight >= 150) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const answer = prompt("vilket åkband har du?");
// if (answer === "small" || answer === "medium") {
//   prompt("du får inte åka Balder");
// } else if (answer === "large" || answer === "platinum") {
//   prompt("grattis du får åka Balders!");
// } else {
//   prompt("ditt angivna åkband finns inte");
// }

// const kilo = prompt("hur många kg väger du?");
// const längd = prompt("hur lång är du, ange i meter (ex: 1.75)");
// const bmi = kilo / (längd * längd);

// if (bmi < 18.5) {
//   alert("du är underviktig");
// } else if (bmi >= 18.5 && bmi < 25) {
//   alert("du är normalvikt");
// } else if (bmi >= 25 && bmi < 30) {
//   alert("du är överviktig");
// } else if (bmi >= 30) {
//   alert("du har fetma");
// }
// let weekDay = prompt("välj en veckodag 1-7");
// console.log(typeof weekDay); //string
// let numberConvert = Number(weekDay);
// console.log(typeof numberConvert); //nummer

// if (numberConvert === 1) {
//   prompt("denna dag är en måndag");
// } else if (numberConvert === 2) {
//   prompt("denna veckodag är tisdag");
// } else if (numberConvert === 3) {
//   prompt("denna veckodag är onsdag");
// } else if (numberConvert === 4) {
//   prompt("denna veckodag är torsdag");
// } else if (numberConvert === 5) {
//   prompt("denna veckodag är fredag");
// } else if (numberConvert === 6) {
//   prompt("denna veckodag är lördag");
// } else if (numberConvert === 7) {
//   prompt("denna veckodag är söndag");
// } else {
//   prompt("FALSE ! Nu har de blivit nåt knasigt, 1-7 sa vi va?:)");
// }
// switch (numberConvert) {
//   case 1:
//     prompt("monday!");
//     break;
//   case 2:
//     prompt("tisdag!");
//     break;
//   case 3:
//     prompt("onsdag!");
//     break;
//   case 4:
//     prompt("torsdag!");
//     break;
//   case 5:
//     prompt("fredag!");
//     break;
//   case 6:
//     prompt("lördag!");
//     break;
//   case 7:
//     prompt("söndag!");
//     break;
//   default:
//     prompt("false!");
// }
// let month = prompt(
//   "Ange siffrorna 1-12 så ser vi vilken månad varje siffra motsvarar"
// );
// let convertMonth = Number(month);
// switch (convertMonth) {
//   case 1:
//     prompt("jan");
//     break;
//   case 2:
//     prompt("feb");
//     break;
//   case 3:
//     prompt("mars");
//     break;
//   case 4:
//     prompt("april");
//     break;
//   case 5:
//     prompt("maj");
//     break;
//   case 6:
//     prompt("juni");
//     break;
//   case 7:
//     prompt("juli");
//     break;
//   case 8:
//     prompt("aug");
//     break;
//   case 9:
//     prompt("sept");
//     break;
//   case 10:
//     prompt("okt");
//     break;
//   case 11:
//     prompt("nov");
//     break;
//   case 12:
//     prompt("dec");
//     break;
//   default:
//     prompt("false");
// }

// let age = 22;

// age >= 18 ? console.log("du är vuxen") : console.log("du är inte vuxen");

// let number = 122;

// number < 0
//   ? console.log("talet är negativt")
//   : number === 0
//   ? console.log("0")
//   : console.log("talet är positivt");

// let score = 59;

// score >= 60 ? console.log("G") : console.log("IG");

// let score = 28;

// score >= 60
//   ? console.log("mvg")
//   : score <= 59 && score >= 40
//   ? console.log("vg")
//   : score <= 39 && score >= 29
//   ? console.log("g")
//   : console.log("ig");

// let costumerType = "not member";

// costumerType === "member"
//   ? console.log("eligible")
//   : costumerType === "not member"
//   ? console.log("not eligible")
//   : console.log("i dont understand u");

//loopar----------------------------------------------------------
//1
// for (let i = 1; i <= 1000; i++) {
//   console.log(`varv : ${i}`);
// }

//2
// for (let i = 100; i >= 0; i--) {
//   console.log(`varv : ${i}`);
// }

// let fruits = ["apple", "orange", "pear", "kiwi", "pineapple"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`index : ${i} frukt : ${fruits[i]}`);
// }

// let things = ["hammer", "nails", "ruler", "screwdriver", "screws", "saw"];
// things.forEach((item, i, arr) => {
//   console.log(`item : ${item} index: ${i} array: ${arr}`);
// });

// let varv = 0;
// while (varv < 1000) {
//   varv++;
//   console.log(varv);
// }

// let deck = 10;
// switch (deck) {
//   case 1:
//     console.log(2);
//     break;
//   case 2:
//     console.log(3);
//     break;
//   case 3:
//     console.log(4);
//     break;
//   case 4:
//     console.log(5);
//     break;
//   case 5:
//     console.log(6);
//     break;
//   case 6:
//     console.log(7);
//     break;
//   case 7:
//     console.log(8);
//     break;
//   case 8:
//     console.log(9);
//     break;
//   case 9:
//     console.log(10);
//     break;
//   case 10:
//     console.log("knekt");
//     break;
//   case 11:
//     console.log("dam");
//     break;
//   case 12:
//     console.log("kung");
//     break;
//   case 13:
//     console.log("ess");
//     break;
//   default:
//     console.log(`${deck} is nottt valid`);
// }

// const valör = ["hjärter", "ruter", "spader", "klöver"];
// for (let i = 0; i < valör.length; i++) {
//   //här loopar den o kör hjärte först...sen går den inte ttillvbaka in i den loopen utan ner i nästa loop
//   for (let j = 2; j <= 14; j++) {
//     //här...o så kör den hj hela tiden för ja skriver ut den..den är hj hela tiden till loopen är klar
//     console.log(`${valör[i]} ${j}`);
//   }
// }

// let friends = [
//   {
//     name: "Sixten",
//     likes: ["bananas", "strawberries", "blueberries"],
//   },
//   {
//     name: "Khalid",
//     likes: ["papaya", "pear", "pineapple"],
//   },
//   {
//     name: "Lisa",
//     likes: ["raspberries", "watermelon", "apple"],
//   },
// ];

// for (let i = 0; i < friends.length; i++) {
//   console.log(`friend:${friends[i].name} gillar:${friends[i].likes} `);
// }

// const passwords = [123456, "password", 12345678, "qwerty", 123456789];
// const randomNr = Math.floor(Math.random() * passwords.length);
// const randomPassword = passwords[randomNr];
// // console.log(randomPassword);

// for (let i = 0; i < passwords.length; i++) {
//   if (passwords[i] === randomPassword) {
//     console.log(`Aha! I found you ${passwords[i]}`);
//   } else {
//     console.log(`${passwords[i]} was not the right one`);
//   }
// }
