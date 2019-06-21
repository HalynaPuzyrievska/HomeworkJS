//function task1----------------------------
function exchangeCurrency (from,to) {
    return "You get " + (+from*to).toFixed(2) + " UAH!" + "\nor You get "
     + (+from/to).toFixed(2) + " your chosen currency if you enter UAH";
}
//function task2--------------------------------
function depositSettlement (sum,interestRate,terms) {
    terms = parseFloat(terms) * 365/12;
    return (parseFloat(sum)+(parseFloat(sum) * parseFloat(interestRate) * parseFloat(terms))/365/100).toFixed(2);
}  
// function task3--------------------------------------
function randomFunction(min,max) {
    return Math.floor(Math.random() * (max-min)+min)
}    
function roar (lettersCount) {
    var lettersCount = lettersCount || 0;  
    for (var j=lettersCount;j>0;--j){
        var LettersIndex =Math.floor(Math.random()*(alphabet.length-1));
        newWorld+=alphabet[LettersIndex];
    }
    return newWorld;    
}
function randomstring() {
    return roar((randomFunction(min,max)));
}
// function task4--------------------------
function randomFunction(min,max) {
    return Math.floor(Math.random() * (max-min)+min)
} 
function howMany() {
  while (+answer!==random) {
     	var answer=prompt("Guess a number from 0 - 5 ?","");
      	if (answer===null) break;
    }    console.log("Correct answer " + random);
}
function endGame () {
  return howMany((randomFunction()));
}