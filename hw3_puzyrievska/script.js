// // first task------------------------
// age;

// age=+prompt("How old are you?","18");

// if (age<=0 || age<=17 && age>=13) {
//     console.log("Access is denied!");
// } else if (age>=18) {
//     console.log("Welcome!");
// } else if (age<=12){
//     console.log("Please go to Cartoon.network");
// } else {
//     console.log("Error");
// }
// // first task method2------------------
// var age=+prompt("How old are you?","18");
//         console.log(age>=12 && age<=17||age<=0 ?"Access is denied!":
//             (age>=18)?"Welcome!":
//                 (age<=11)?"Please go to Cartoon.network":"error");
 

// // second task----------------------------
// var age = +prompt("How old are you?","30");

// if (age >=30) {
//    var experience=prompt("what is your experience?","3");
//        if (age<=29||experience<=2) {
//           console.log('Not ready!');
//         } else if (age>=30 && experience>=3) {
//           console.log("Welcome!");
//         } 
// }  else if (isNaN(age)||age<=0) {
//         console.log('error');
// }   else {
//         console.log('Not ready!');
// }
// // third task-------------------------------

var EVRO = "EVRO";
var EVRO_SM = "Evro";
var EVRO_SMALL = "evro";
var USD = "USD";
var USD_SM = "Usd";
var USD_SMALL = "usd";
var NULL = "0";
var rate$ = 26;
var rateE = 29;

var currency = prompt("Choose currency please, \n(EVRO or USD)?","");

switch(currency) {
    case EVRO:
    case EVRO_SM:
    case EVRO_SMALL: 
    var sum = prompt("Enter the amount you want to convert to UAH or to EVRO", "");
    console.log("You get " + +sum*rateE + " UAH!" + "\nor You get " + Math.round(+sum/rateE) + " EVRO!")
    break;
    case USD:
    case USD_SM:
    case USD_SMALL: 
    var sum = prompt("Enter the amount you want to convert to UAH or to USD", "");
    console.log("You get " + +sum*rate$ + " UAH!" + "\nor You get " + Math.round(+sum/rate$) + " USD!")
    break;
    case NULL:
    console.log("error");
    break;
    default:
    console.log('Canceled');
}

 


