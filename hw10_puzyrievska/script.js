function MilitaryResource(type, health, image, distance) {
   this.type = type;
   this.health = health;
   this.maxHealth = 500;
   this.distance = distance;
   this.maxDistance = 1000;
   this.image = image;

}

MilitaryResource.prototype.isReadyToMove = function() {
    return this.maxDistance >  this.distance;
}

MilitaryResource.prototype.isReadyToFight = function() {
   return this.health >  0;
}

MilitaryResource.prototype.restore = function() {
   this.health = this.maxHealth;
   this.distance = 0;
}

MilitaryResource.prototype.clone = function() {
    return new MilitaryResource(this.type, this.health, this.image, this.distance);
}

function Squad (resources) {
    this.resources = resources && resources.length ?
        resources.map(function(resources){
            return resources;
        })  :  [];
}

Squad.prototype.isReadyToMove = function(){
    return this.resources.every(function(resource) {
        return resource.isReadyToMove();
    })
}

Squad.prototype.isReadyToFight = function()   {
    return this.resources.every(function(resource){
        return resource.isReadyToFight();
    })
}

Squad.prototype.getReadyToMoveResources = function(){
    return this.resources.filter(function(resource) {
        return resource.isReadyToMove();
    })
}

Squad.prototype.restore = function() {
    return this.resource.forEach(function(resource){
        return resource.restore();
    })
}

Squad.prototype.combineResources = function(defaultResources){
    return this.defaultResources.sort(function() {
        return .5 - Math.random();
   });
}

Squad.prototype.clone = function () {
    return new Squad (this.resources.map(function(resources){
        return resources.clone();
    }));
}

var winni = new MilitaryResource("Land_Winni", 100, "images/winnie_pooh.png", 200);
var tigger = new MilitaryResource("Air_Tigger", 50, "images/tigger.png", 90);
var donkey = new MilitaryResource("Water_Donkey", 200, "images/donkey.png", 50 );
var winniClone = winni.clone();

var disney = [];
disney.push(winni, tigger, donkey);
var disneyKillers = new Squad(disney);

console.log(disney);
console.log(disneyKillers);

function loadCards() {
    for(var key in disney) {
        document.getElementById('out').innerHTML += '<div class="block"></div>';
        document.getElementById('out').lastChild.innerHTML += '<div class="health indicator"></div>';
        document.getElementById('out').lastChild.innerHTML += '<div class="stamina indicator"></div>';
        document.getElementById('out').lastChild.innerHTML += '<h2 class="title_character">' + disney[key].type + '</h2>';
        document.getElementById('out').lastChild.innerHTML += '<div class="image"></div>';
        document.getElementsByClassName('image')[key].innerHTML += '<img class="character" src="' + disney[key].image + '"class ="character" width="120" height="120" alt="character"></img>'; 
    }
}

loadCards();

console.log("ready to move: ", disneyKillers.isReadyToMove());
console.log("ready to fight: ", disneyKillers.isReadyToFight());
console.log("resources, ready to move: ", disneyKillers.getReadyToMoveResources());
console.log("cloned squad: ", disneyKillers.clone());
