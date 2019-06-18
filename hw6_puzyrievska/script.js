var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
var min=+prompt("how many characters do you want to get","min");
var max=+prompt("how many characters do you want to get","max");
var elCount=prompt("How many strings do you want to get?","");
var words =[], normWords={};

for (var i=elCount;i>0;--i) {
var newWorld = "";
var lettersCount = Math.floor(Math.random() * (max-min)+min);

    for (var j=lettersCount;j>0;--j){
        var LettersIndex =Math.floor(Math.random()*(alphabet.length-1));
        newWorld+=alphabet[LettersIndex];
    }
    if (!normWords[newWorld.length]) {
        normWords[newWorld.length] = [];
    } else {
    }   normWords[newWorld.length].push(newWorld);
}
console.log(normWords);
console.log(elCount + " new word: ");
for (key in normWords) {
    var result = normWords[key].length;
    console.log(result + " word with " + key + " characters ");
}