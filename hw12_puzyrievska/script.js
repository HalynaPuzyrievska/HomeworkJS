var MilitaryResource = (function() {
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

    MilitaryResource.prototype.loadCards = function() {
        for(var i = 0; i < disney.length; i++) {
            document.getElementById('out').innerHTML += '<div class="block"></div>';
            document.getElementsByClassName('block')[i].innerHTML += '<div class="wrap-block"></div>';
            document.getElementsByClassName('wrap-block')[i].innerHTML += '<div class="health indicator" onclick="actions(this), removeCard(this)"></div>';
            document.getElementsByClassName('health')[i].innerHTML += '<div class="current-health">' + disney[i].health + '</div>';
            document.getElementsByClassName('health')[i].innerHTML += '<div class="split">out of</div>';
            document.getElementsByClassName('health')[i].innerHTML += '<div class="max-health">' + disney[i].maxHealth + '</div>';
            document.getElementsByClassName('wrap-block')[i].innerHTML += '<div class="distance stamina indicator" onclick="actions(this), changeColor(this)"></div>';
            document.getElementsByClassName('distance')[i].innerHTML += '<div class="current-distance">' + disney[i].distance + '</div>';
            document.getElementsByClassName('distance')[i].innerHTML += '<div class="split">out of</div>';
            document.getElementsByClassName('distance')[i].innerHTML += '<div class="max-distance">' + disney[i].maxDistance + '</div>';
            document.getElementById('out').lastChild.innerHTML += '<h2 class="title_character">' + disney[i].type + '</h2>';
            document.getElementById('out').lastChild.innerHTML += '<div class="image"></div>';
            document.getElementsByClassName('image')[i].innerHTML += '<img class="character" src="' + disney[i].image + '"class ="character" width="120" height="120" alt="character"></img>'; 
        }
    }
    return MilitaryResource;
}());

var Squad = (function() {
    function Squad(resources) {
    this.resources = resources && resources.length ?
        resources.map(function(resources){
            return resources;
        })  :  [];
    }

    Squad.prototype.loadCards = function() {
        return this.resources.every(function(resource) {
            return resource.loadCards();
        })
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
        })
    }

    Squad.prototype.clone = function () {
        return new Squad (this.resources.map(function(resources){
            return resources.clone();
        }));
    }
    return Squad;
}());

var disney = [
   winni = new MilitaryResource("Land_Winni", 500, "images/winnie_pooh.png", 1000),
   tigger = new MilitaryResource("Air_Tigger", 500, "images/tigger.png", 1000),
   donkey = new MilitaryResource("Water_Donkey", 500, "images/donkey.png", 1000)
]

var disneyKillers = new Squad(disney);

disneyKillers.loadCards();

function actions(current) {
   var value = +current.children[0].innerHTML;
   var maxValue = +current.children[2].innerHTML;
   value = Math.round(value - (maxValue/100 * 10));
   if (value < 0) value = 0;
   current.children[0].innerHTML = value;
}

function removeCard(current) {
    if(+current.children[0].innerHTML == 0) {
        var element = current.closest('.block');
        element.remove();
    };
}

function changeColor(current) {
    if(+current.children[0].innerHTML == 0) {
        var element = current.closest('.block');
        element.classList.add('make_grey');
    };
} 