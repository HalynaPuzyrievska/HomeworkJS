//1 task-------------------------------------------------------
var rate$ = 26;
var rateE = 29;
var currency = prompt("Choose currency please, \n(EVRO or USD)?","");
var sum = prompt("Enter the amount you want to convert", "");

if (currency === "EVRO"||currency === "Evro"||currency === "evro") {
    console.log(exchangeCurrency(sum,rateE));
} else if (currency==="USD"||currency==="Usd"||currency==="usd") {
    console.log(exchangeCurrency(sum,rate$));       
} else {
    console.log('Canceled');        
} 
//2 task--------------------------------------------------
var sum = +prompt("Please enter the amount of the deposit","");
var interestRate = +prompt("what interest rate do you want?","%");
var terms = +prompt("For how many months do you want to deposit?","12"); 
if (isNaN(sum)||isNaN(interestRate)||isNaN(terms)) {
    console.log("error");
} else if (sum===null||interestRate===null||terms===null) {
    console.log("cancel");
} else {
    console.log(depositSettlement(sum,interestRate,terms) + ' Total amount');
}
//3 task---------------------------------------------------------      
var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
var min=+prompt("how many characters do you want to get","min");
var max=+prompt("how many characters do you want to get","max");
var newWorld = "";

if (isNaN(max)||isNaN(min)) {
    console.log("error");
}
var word = randomstring();
console.log(word);
//4 task---------------------------------------------------------
var random = randomFunction(0,5);

endGame();
 		


