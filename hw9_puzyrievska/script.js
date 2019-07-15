function MilitaryResource(type, health, distance) {
   this.type = type;
   this.health = health;
   this.maxHealth = health;
   this.distance = 0;
   this.maxDistance = distance;
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
  return new MilitaryResource(this.type, this.maxHealth, this.maxDistance);
}

var res = new MilitaryResource('land', 300, 500);
var clone = res.clone();

var resourcesArray =[ 
res,
new MilitaryResource('air', 200, 500),
new MilitaryResource('water', 200, 1000)
];

console.log(resourcesArray[2].clone());
console.log(res);

function Squad (resources) {
    this.resources = resources && resources.length ?
        resources.map(function(res){
            return res;
        })  :  [];
};

console.log(res.clone());

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
    return new Squad (this.resources.map(function(res){
        return res.clone();
    }));
};
    
var squad = new Squad(resourcesArray);

console.log(squad);

console.log("ready to move: ", squad.isReadyToMove());
console.log("ready to fight: ", squad.isReadyToFight());
console.log("resources, ready to move: ", squad.getReadyToMoveResources());
console.log("cloned squad: ", squad.clone());

