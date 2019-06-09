var iter=+prompt("how many iterations do?","");
do {
  if (iter===null) break;
  console.log("Iteration");
} while (--iter>0);
//-----------------------------------------------------------
var iter=+prompt("how many iterations do?","");
while (--iter>=0) {
    console.log("Iteration");
    if (iter===null) break;
}
//-----------------------------------------------------------
var iter=+prompt("how many iterations do?","");
for (i=0;--iter>=0;i++) {
    console.log("Iteration");
    if (iter===null) break;
}
//------------------------------------------------------------
rand=Math.floor(Math.random()*6);
do {
  	var answer=prompt("Guess a number from 0 - 5 ?","");
  	if (answer===null) break;
} while (+answer!==rand); 
console.log("Correct answer " + rand);
//-----------------------------------------------------------------
rand=Math.floor(Math.random()*6);
while (+answer!==rand) {
 	var answer=prompt("Guess a number from 0 - 5 ?","");
  	if (answer===null) break;
} console.log("Correct answer " + rand);
//-----------------------------------------------------------------------------
var rand=Math.floor(Math.random()*6);
for (i=0;+answer!==rand;i++) {
	var answer=prompt("Guess a number from 0 - 5 ?","");
  	if (answer===null)  break;
} console.log("Correct answer " + rand);
//------------------------------------------------------------------
var result;
var num=prompt("enter a number to find 100 multiples","");
for(var i = 1; i <= 100; i++) {
	if (num===null) {
		console.log("cancel")
	} else if (isNaN(num)||+num===0) {
		console.log("error");
		break;
	} else {
		console.log(result=num * i);
	}
}
//-------------------------------------------
var i=0;
var result;
var num=prompt("enter a number to find 100 multiples","");
while (++i<=100) {
	if (num===null) {
		console.log("cancel");
		break;
	} else if (isNaN(num)||+num===0) {
		console.log("error");
		break;
	} else {
		console.log(result=num * i);
	}
}
//------------------------------------------------------
var result;
var i=0;
var num=prompt("enter a number to find multiples","");
	if (num===null||multiples===null) {
		console.log("cancel");	
	} else if (isNaN(num)||+num===0) {
		console.log("error");
	} else {
		var multiples=prompt("how many multiples yoo need?","");
	}
	while (++i<= multiples) {
		console.log(result=num * i);
	} 
//--------------------------------------------------
var result;
var num=prompt("enter a number to find multiples","");
	if (num===null||multiples===null) {
		console.log("cancel");	
	} else if (isNaN(num)||+num===0) {
		console.log("error");
	} else {
		var multiples=prompt("how many multiples yoo need?","");
	} 
	for (var i=1;i<=multiples;i++) {
		console.log(result=num * i);
	}