// arithmetical mean------------------------
var firstNumber=prompt("enter the first number","");
var secondNumber=prompt("enter the second number ","");
var thirdNumber=prompt("enter the third number ","");

var sum=+firstNumber+ +secondNumber + +thirdNumber;
console.log((sum)/3);

// currency exchange------------------------
var $ = prompt('enter the dollar amount to get the equivalent in UAH', "");
console.log('you get ' + +$*27 + ' UAH!')


// Compare value-----------------------------
var a="abc";// string
var b=153;// number
console.log(a===b);// false

// script that ask user to guess what number system has generated------
var max=5,
    min=0;
rand=Math.random()*(max-min)+min;
raunded=Math.round(rand);

var answear=+prompt("Guess a number?","");
console.log(raunded===answear);

