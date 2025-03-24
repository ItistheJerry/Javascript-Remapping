const accountId = 13435;
let accountEmail = "jihamainhukhalnayak@wahi.com";
var accountPassword = "234252";
accountCity = "Jaipur";
let accountState;


// accountId = 2 //. won't work as accountId is a const as in unmutable



accountEmail = "fwttr@wahi.com";
accountPassword = "3455364";
accountCity = "Bengaluru";

// These are Mutable;

console.log(accountId);


/* Prefer f=not to use var because
of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

