const uName = "Jerry";
const repoCount = 50;

// console.log(name + repoCount + "Value");

console.log(`Hello Mr. ${uName} I believe your RepoCount is ${repoCount} would like you to be better`);

const gameName = new String('jerryh-jfh');


console.log(gameName[0]);

console.log(gameName.__proto__); // for __ example below

console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 6) // start number and end number // end number or value will not be included;

// console.log(newString);

const anotherString = gameName.slice(-8, 4); // can also give negative values

console.log(anotherString);


// trim and replace used in to correct input forms
// trim start and trim end and also works only on white spaces;

// Trim
const newString1 = "    jerry   ";
console.log(newString1);
console.log(newString1.trim());

// replace = url 

const url = "https://www.youtube.com/%20choudhary";

// value came as const url = "https://www.youtube.com/ /4cj";
// the browser will replace spaces with %20 instead of space

// what to search for and what to replace with
console.log(url.replace('%20', '-'));


// if
console.log(url.includes('youtube')); // checks if the url contains the word or not

const bimbo = "hey hello why it is the world kingdom is the best";

console.log(bimbo.match(/ld|st|lo/g));


// string to array conversion;

// example we will look for common unique symbol or character to divide words or strings then convert to an array

// using split

console.log(bimbo.split(' '));

// strings have many functions and tools;


