function MilitaryResource(type, health, image, distance) {
   this.type = type;
   this.health = health;
   this.maxHealth = 500;
   this.distance = distance;
   this.maxDistance = 1000;
   this.image = image;

};

MilitaryResource.prototype.isReadyToMove = function() {
    return this.maxDistance >  this.distance;
};

MilitaryResource.prototype.isReadyToFight = function() {
   return this.health >  0;
};

MilitaryResource.prototype.restore = function() {
   this.health = this.maxHealth;
   this.distance = 0;
};

MilitaryResource.prototype.clone = function() {
    return new MilitaryResource(this.type, this.health, this.image, this.distance);
};

function Squad (resources) {
    this.resources = resources && resources.length ?
        resources.map(function(resources){
            return resources;
        })  :  [];
};

Squad.prototype.isReadyToMove = function(){
    return this.resources.every(function(resource) {
        return resource.isReadyToMove();
    })
};

Squad.prototype.isReadyToFight = function()   {
    return this.resources.every(function(resource){
        return resource.isReadyToFight();
    })
};

Squad.prototype.getReadyToMoveResources = function(){
    return this.resources.filter(function(resource) {
        return resource.isReadyToMove();
    })
};

Squad.prototype.restore = function() {
    return this.resource.forEach(function(resource){
        return resource.restore();
    })
};

Squad.prototype.combineResources = function(defaultResources){
    return this.defaultResources.sort(function() {
        return .5 - Math.random();
   });
};

Squad.prototype.clone = function () {
    return new Squad (this.resources.map(function(resources){
        return resources.clone();
    }));
};

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
        document.getElementById('out').lastChild.innerHTML += '<img src="' + disney[key].image + '"class ="character" width="120" height="120" alt="">';
    }
}

loadCards();

console.log("ready to move: ", disneyKillers.isReadyToMove());
console.log("ready to fight: ", disneyKillers.isReadyToFight());
console.log("resources, ready to move: ", disneyKillers.getReadyToMoveResources());
console.log("cloned squad: ", disneyKillers.clone());





















// var card = function MakeCard() {
//     for (var i = 0; i < resourcesArray.length; i++) {
//         var div = document.createElement('div');
//         div.className = "block";
//         div.innerHTML = '<div class="health indicator"></div><div class="stamina indicator"></div><h2 class="title_character">Water Donkey</h2><div class="image"><img src="images/donkey.png" class="character" width="120" height="120"></div>';
//         document.body.appendChild(div);
        
//     }
// }

// card();









// var container = document.createDocumentFragment();
// for (var i = 1; i < resourcesArray.length; i++) {
//     var a = document.createElement('a');
//     container.appendChild(a);
//     var img = a.appendChild(document.createElement('img'));
//     img.src = i + 'jpg';
//     }
// document.body.appendChild(container);

// var div = document.createElement('div');
//     div.className = "block";
//     div.innerHTML = '<div class="health indicator"></div><div class="stamina indicator"></div><h2 class="title_character">Water Donkey</h2><div class="image"><img src="images/donkey.png" class="character" width="120" height="120"></div>';

//   document.body.appendChild(div);