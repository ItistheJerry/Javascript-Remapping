// Date 
console.log('\n++++++++++++++++**************** DATE *******************++++++++++++\n');

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);

// declare a particular date (specific);

let myCreatedDate = new Date(2023, 5, 23); // months by 0
console.log(myCreatedDate.toDateString());

// formatwise

let createDate1 = new Date("2022-06-14");
console.log(createDate1.toLocaleString());

let createDate2 = new Date("01-14-2022");
console.log(createDate2.toLocaleString());

let createDateTime1 = new Date("2022-06-14"); // quizes and in poles like who gave fastest answer;

let myTimeStamp = Date.now();

console.log(myTimeStamp); // like when making a booking hotel app dates has to be compared;

console.log(createDate2.getTime());

// convert to seconds
// console.log(Date.now()/1000); // better option below;
console.log(Math.floor(Date.now()/1000));


// more methods on Date

let newDate = new Date();

console.log(newDate);

// to pull of specefic part of the date like minth year or date;

console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    // weekday: "narrow",
    // weekday: "short",
}));


console.log('\n++++++++++++++++**************** TIME *******************++++++++++++\n');
