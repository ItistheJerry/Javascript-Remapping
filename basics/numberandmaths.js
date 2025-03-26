// +++++++++++++++************* NUMBERS **************++++++++++++
console.log('\n+++++++++++++++************* NUMBERS **************++++++++++++\n');


const score = 400;
console.log(score);


// we can define any variable manually as number or whatever but it usually can define automatically;

const balance = new Number(100);
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));

// used in example like ecommerce websites = calculation gst and more use toFixed in such places;

const oNum = 23.857840;
console.log(oNum.toPrecision(1)); // priority before and after decimal;

const hund = 10023002023; // sometimes difficult to see these big number 0's; // we can make representaion easy;
console.log(hund.toLocaleString()); // provides commas to easy read;
// default value is in USD but we can change it to INR see below
console.log(hund.toLocaleString('en-IN'));


// for competetive programming = minimum = min and maximum = max  Value's and much more;


// +++++++++++++++************* MATHS **************++++++++++++
// Math is a preinstalled library in JS
console.log('\n++++++++++++++++************* MATHS **************+++++++++++++\n');


console.log(Math); // Object


// try everything in Inspect

console.log(Math.abs(-4)); // absoloute value from negative value to positive only

console.log(Math.round(4.3)); // roundoff of value;

console.log(Math.acos);

console.log(Math.ceil(4.4)); // touch the roof // 5

console.log(Math.floor(4.543)); // touch the ground // 4

console.log(Math.max(4, 5, 3, 7, 8)); // maximum among these;

console.log(Math.min(4, 5, 3, 7, 8)); // minimum among these;

// More to offer play with them soon;


// Important One this is below you see;

console.log(Math.random()); // random number // only between 0 - 1 automatically ; // Manually we can provide range

console.log(Math.random()*10 + 1); // as it provides only btw 0 - 1

// as value can be 0 as well by adding 1 minimum will be 1 only;

// better way to write the code;

console.log((Math.random()* 10)) + 1

console.log(Math.ceil(Math.random()* 10)) + 1

console.log(Math.floor(Math.random()* 10)) + 1

// trick to define min and max and a formula as well;
const min = 10;

const max = 50;

// found commonly in stack overflow;


// Very Important Formula;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // minimum 10 
// by adding min at last provides as no matter the solution as it is added by th min value the total answer will always be higher than min value;

