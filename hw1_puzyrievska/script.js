// 1 method console.log ------------------------------
console.log("Hello Halyna");
// 1 method console.log + var ------------------------
var name ='Halyna';
var text ='Hello '+ name;
console.log(text);
// 2 method console.group-----------------------------
console.log("Start group1");
console.group("Wish list");
console.log("Learn JS");
console.log("Mini Cooper");
console.log("Trip to rome");
console.groupEnd("Stop group");
console.log("Start group2");
console.group("Wish list");
console.log("New tatoo Eywa");
console.log("New tatoo flower daisy");
console.groupEnd("Stop group");
// 2 method console.group + var -----------------------
var list = 'Wish list';
console.log("Start group1");
console.group(list);
console.log("Learn JS");
console.log("Mini Cooper");
console.log("Trip to rome");
console.groupEnd("");
console.log("Start group2");
console.group(list);
console.log("New tatoo Eywa");
console.log("New tatoo flower daisy");
console.groupEnd("");
// 3 method console.info + var ---------------------------
var computer = "Pentium 1";
var aboutMe = {str:"About me", id:1}; 
console.info("My first computer was a", computer, ". A couple of words: ", aboutMe);
// 4 method console.warn + var-----------------------------
for (var i=0; i<3; i++) {
    console.warn("You know nothing, %s. %d times.", "Jon Snow", i+1);
  }
// 5 method console.error %c-----------------------------
console.error("This is %cMy stylish error", "color: red; font-style: italic; background-color: yellow; padding: 10px;");
// 6 method console.time + var-----------------------------------
// var message = 'message';
// console.time(message);
// alert("Ok");
// console.timeLog(message);
// alert("time is passing...");
// console.timeEnd(message);











