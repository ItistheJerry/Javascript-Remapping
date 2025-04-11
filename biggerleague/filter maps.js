console.log("\n+++++++++++++*************** FILTER || MAP +++++++++++++***************\n");



const coding = ["Js", "ruby", "Python", "cpp"];

coding.forEach( (item) => {
    console.log(item);
    
})


const values = coding.forEach( (item) => {
    console.log(item); // it printed the values or sure but it returned nothing as it returned undefined
    return item
    
})
console.log(values);
// for each wont return values

// better examples with numbers

const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

// filter return the element of an array (callback)
const newNums = myNums.filter( (num) => num > 4 ) // who shares and satisfy condition then the those values will be returned

console.log(newNums);
// 5,6,7,8

// PROBLEMS people face

// const newNums = myNums.filter( (num) => {num > 4} ) // return an empty array, self return explicit return

// same as above in foreach

const newNums1 = [];

myNums.forEach( (num) => {
    if (num > 4){
        newNums1.push(num)
    }
})
console.log(newNums1);



// NEW EXERSIZE:


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


// DATABASE VALUES:-

// all books genre history
const userBooks1 = books.filter( (bk) => bk.genre === 'History');
const userBooks2 = books.filter( (bk) => bk.publish >= 2000);
const userBooks3 = books.filter( (bk) => bk.edition >= 2008);
const userBooks4 = books.filter( (bk) => bk.genre === 'Science');

// mix

const userBooks5 = books.filter( (bk) => bk.publish >= 1990 && bk.edition >= 2000);


console.log(userBooks1);
console.log(userBooks2);
console.log(userBooks3);
console.log(userBooks4);
console.log(userBooks5);




console.log("\n+++++++++++++*************** INTERESTING || NEW +++++++++++++***************\n");

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// IMPORTANT TO NOTE
// const newData = myNumers.map( (num) => {num + 10});
// when opening scope like this {num + 10} insert return inside for it to work as when open it know it to be returned but when closed it needs to be reminded like below:
// {return num + 10}

const newData = myNumers.map( (num) => num + 10);
console.log(newData);



console.log("\n+++++++++++++*************** CHAINING +++++++++++++***************\n")

const newNumber = myNumers.map( (num) => num * 10 ).map( (num) => num + 10).filter( (num) => num >= 40);
console.log(newNumber);


console.log("\n+++++++++++++*************** REDUCE +++++++++++++***************\n");

// used plenty times notably when we are making shopping carts
// currentvalue is the current array elements 
// accumulator will have the value we have given first via initial value then we add the current value and accumulator
// second time the sum of both will replace the value of accumulator example below;

const arr = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
);

console.log(sumWithInitial);
// Expected output 10

// another example
const nums = [1, 2, 3];

const myTotal = nums.reduce(function (acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc + currval
}, 0)

console.log(myTotal);

// now in arrow Function

const myTotal2 = nums.reduce( (acc, currval) => 
    acc + currval, 9);
console.log(myTotal2);


const myTotal3 = nums.reduce( (acc, currval) => {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
    
}, 11);

console.log(myTotal3);



console.log("\n+++++++++++++*************** SHOPPING CART EXAMPLE +++++++++++++***************\n");

const shoppingCart = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "PY Course",
        price: 3999
    },
    {
        itemName: "Cpp",
        price: 2499
    },

]

// function to add all the price or courses which means proceed to buy

const proceedToBuy = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
// right now easy later we need to check if the price is in digit or not and much more

console.log(proceedToBuy);
