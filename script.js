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

//Alla i gruppen får en egen variabel med sin gissning, använd en loop för att slå ihop dom till ett objekt eller en array
//vad menar du där??

// const guess = [
//   { name1: "jakob", guess: 13 },
//   { name1: "kalle", guess: 14 },
//   { name1: "jörgen", guess: 16 },
// ];

// const randomNr = Math.floor(Math.random() * 20) + 1;
// console.log(randomNr);

// for (let i = 0; i < guess.length; i++) {
//   //   const närmast = randomNr - guess[i].guess;  för se vem som e närmst!...kolla de sen kan ja ex säta den
//   //consten var ja vill bara ja når den?? svårtt o veta va ja ska sätta den........!
//   // vill me veta var ja kan ha in IF satser i loopar etc..o var ja kan ha variablarna om de blir flera o massa block
//   // med kod loopar o ifsatser
//   //   console.log(närmast);

//   if (guess[i].guess === randomNr) {
//     console.log(
//       `${guess[i].name1} hade rätt!! ${guess[i].name1}s gissning var: ${guess[i].guess}`
//     );
//   } else {
//     console.log(
//       `nej fan inte rätt!!${guess[i].name1}s gissning var: ${guess[i].guess}
//       `
//     );
//   }
// }

// Skapa ett program där ni väljer 3 resmål efter en rimlig budget. kom på något sätt för att välja rankingordning över era 3
//  val (vilket resmål ni helst hade velat ha om det finns tillgängligt) Loopa sen igenom listan med resmål för att se om ni
//  kan hitta någon av era alternativ. Om fler än en hittas så ska den som är högst på er lista väljas.

// EXTRA - hitta den billigaste resan respektive den dyraste resan

// for (let key in cities) {
//   console.log(key);
// }
const cities = {
  Stockholm: 200,
  "New York": 4500,
  Tokyo: 7000,
  Paris: 1500,
  London: 1200,
  Sydney: 9500,
  "Cape Town": 7500,
  Dubai: 3500,
  Moskva: 2500,
  Berlin: 1100,
  Toronto: 4800,
  "Los Angeles": 5000,
  Beijing: 6000,
  Bangkok: 5500,
  Mumbai: 5200,
  "Buenos Aires": 9000,
  Cairo: 3000,
  Seoul: 6500,
  "Mexico City": 7000,
  Amsterdam: 1300,
  Barcelona: 1400,
  Prag: 1100,
  Rom: 1500,
  Aten: 1800,
  Lissabon: 1600,
  Wien: 1200,
  Zurich: 1400,
  Oslo: 1000,
  Helsingfors: 1200,
  Köpenhamn: 1100,
  Reykjavik: 2000,
  Warszawa: 1300,
  Istanbul: 2500,
  Singapore: 7000,
  "Hong Kong": 6500,
  Miami: 4700,
  Chicago: 4800,
  "San Francisco": 5000,
  Delhi: 5200,
  Shanghai: 6000,
  Melbourne: 9500,
  Johannesburg: 7500,
  Lagos: 7200,
  Nairobi: 6700,
  Doha: 3400,
  "Abu Dhabi": 3500,
  Phuket: 5700,
  Manila: 5800,
  "Kuala Lumpur": 5600,
  Jakarta: 5400,
  Hanoi: 5900,
  "Ho Chi Minh City": 5800,
  Taipei: 6200,
  Osaka: 6900,
  Kyoto: 6800,
  Santiago: 9200,
  Lima: 8800,
  Bogota: 8700,
  Caracas: 8500,
  "Sao Paulo": 8100,
  Quito: 8900,
  Montevideo: 9300,
  "Rio de Janeiro": 8200,
  Havana: 7600,
  Dublin: 1300,
  Edinburgh: 1400,
  Lisbon: 1500,
  Madrid: 1600,
  Valencia: 1700,
  Malaga: 1800,
  Nice: 1900,
  Lyon: 2000,
  Marseille: 2100,
  Venice: 2200,
  Florence: 2300,
  Milan: 2400,
  Naples: 2500,
  Palermo: 2600,
  Brussels: 2700,
  Geneva: 2800,
  Munich: 2900,
  Hamburg: 3000,
  Frankfurt: 3100,
  Stuttgart: 3200,
  Dusseldorf: 3300,
  Cologne: 3400,
  Luxembourg: 3500,
  Bratislava: 3600,
  Ljubljana: 3700,
  Zagreb: 3800,
  Sarajevo: 3900,
  Tirana: 4000,
  Podgorica: 4100,
  Skopje: 4200,
  Antalya: 2300,
  Nicosia: 2400,
  Riga: 1500,
  Tallinn: 1400,
  Vilnius: 1500,
  "Luxembourg City": 3200,
  Monaco: 3300,
  "San Marino": 3400,
  "Andorra la Vella": 3500,
  Vaduz: 3600,
  Chisinau: 3700,
  Minsk: 3800,
  Kyiv: 3900,
  Sofia: 4000,
  Bucharest: 4100,
  Belgrade: 4200,
  Dubrovnik: 4400,
  Split: 4500,
  Pristina: 5000,
  Yerevan: 5100,
  Baku: 5200,
  Tbilisi: 5300,
  "Nur-Sultan": 5400,
  Bishkek: 5500,
  Astana: 5600,
  Tashkent: 5700,
  Ashgabat: 5800,
  Dushanbe: 5900,
  Kabul: 6000,
  Islamabad: 6100,
  Karachi: 6200,
  Lahore: 6300,
  Kathmandu: 6400,
  Thimphu: 6500,
  Dhaka: 6600,
  Colombo: 6700,
  Male: 6800,
  Yangon: 6900,
  Vientiane: 7300,
  "Bandar Seri Begawan": 7800,
  Macau: 8200,
  Guangzhou: 8300,
  Busan: 8600,
  Fukuoka: 8700,
  Sapporo: 8800,
  Nagoya: 8900,
  Hiroshima: 9200,
  Nagasaki: 9300,
  Kobe: 9400,
  Sendai: 9500,
  Chongqing: 9600,
  Chengdu: 9700,
  "Xi'an": 9800,
  Wuhan: 9900,
  Shenzhen: 10000,
  Shenyang: 10100,
  Hangzhou: 10200,
  Tianjin: 10300,
  Nanjing: 10400,
  Harbin: 10500,
  Ulaanbaatar: 10600,
  Vladivostok: 10700,
  Novosibirsk: 10800,
  Yekaterinburg: 10900,
  Samara: 11000,
  Kazan: 11100,
  "Rostov-on-Don": 11200,
  Krasnoyarsk: 11300,
  Irkutsk: 11400,
  Omsk: 11500,
  Perth: 11600,
  Adelaide: 11700,
  Darwin: 11800,
  Cairns: 11900,
  Wellington: 12000,
  Christchurch: 12100,
  Auckland: 12200,
  Suva: 12300,
  Apia: 12400,
  "Nuku'alofa": 12500,
  "Port Vila": 12600,
  Honiara: 12700,
  Noumea: 12800,
  Papeete: 12900,
  "Pago Pago": 13000,
  Majuro: 13100,
  Palikir: 13200,
  Funafuti: 13300,
  Tarawa: 13400,
  Yaren: 13500,
  "Port Moresby": 13600,
  "Port Louis": 13700,
  Victoria: 13800,
  Antananarivo: 13900,
  Maputo: 14000,
  Windhoek: 14100,
  Gaborone: 14200,
  Harare: 14300,
  Kinshasa: 14500,
  Lusaka: 14600,
  Luanda: 14700,
  Dakar: 14800,
  Accra: 14900,
  Abuja: 15000,
  "Addis Abeba": 15100,
  "Dar es Salaam": 15200,
  Kampala: 15300,
  Banjul: 15500,
  Freetown: 15600,
  Monrovia: 15700,
  Conakry: 15800,
  Bamako: 15900,
  Ougadougou: 16000,
  Lome: 16100,
  Cotonou: 16200,
  Libreville: 16300,
  Malabo: 16400,
  "N'Djamena": 16500,
  Bangui: 16600,
  Brazzaville: 16700,
  Kigali: 16800,
  Bujumbura: 16900,
  Juba: 17000,
  Khartoum: 17100,
  Asmara: 17200,
  Djibouti: 17300,
  Mogadishu: 17400,
  Nouakchott: 17600,
  Rabat: 17700,
  Algiers: 17800,
  Tunis: 17900,
  Tripoli: 18000,
  Benghazi: 18100,
  Niamey: 18200,
  Nouadhibou: 18300,
  "Porto-Novo": 18400,
  Lilongwe: 18500,
  Blantyre: 18600,
  Moroni: 18700,
  "Saint-Denis": 18800,
  "Victoria Falls": 18900,
  Francistown: 19000,
  "Walvis Bay": 19100,
  Seychelles: 19200,
  Comoros: 19300,
  Mayotte: 19400,
  "St. Helena": 19500,
  "São Tomé": 19700,
  Praia: 19800,
  Bissau: 19900,
  Yamoussoukro: 20000,
  Abidjan: 20100,
  Liberia: 20200,
  Managua: 20900,
  Tegucigalpa: 21000,
  "San Salvador": 21100,
};

// for (let key in cities) {
//   console.log(key);

//   console.log(cities[key]);
// }

// const cityArray = Object.entries(cities);
// console.log(cityArray);
// cityArray.map((item) => {
//   console.log(Object.assign(item));
// });

const travels = [
  {
    location: "Barcelona",
    ranking: 1,
  },
  {
    location: "Bangladesh",
    ranking: 2,
  },
  { location: "London", ranking: 3 },
];

for (let i = 0; i < travels.length; i++) {
  for (let key in cities) {
    // console.log(cities[key]);
    // console.log(key);

    if (travels[i].location === key) {
      console.log(
        `${travels[i].location} is number ${travels[i].ranking} expensive: ${cities[key]}`
      );
    }
  }
}
// kan ju inte jämföra variabler i en loop då jämför de om o om igen ju.hur?
