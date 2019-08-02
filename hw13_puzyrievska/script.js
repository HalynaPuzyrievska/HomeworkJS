function Human() {
    this.slogan = "Who am I?";
}

Human.prototype.createCard = function() {
    document.getElementById('out').innerHTML += '<div class="block"><span class="title">Human:</span> Why am I here? <span class="emoji">&#x1F449</span></div>';
}

function Schoolchild() {
    this.slogan = "I'm here to play every day";
}

Schoolchild.prototype.createCard = function() {
    document.getElementById('out').innerHTML += '<div class="block"><span class="title">Schoolchild:</span> Hey, teachers, leave them kids alone! <span class="emoji">&#x1F449</span></div>';
}

function Student() {
    this.slogan = "Have fun every day!";
}

Student.prototype.createCard = function() {
    document.getElementById('out').innerHTML += '<div class="block"><span class="title">Student:</span> Wake up - fall asleep - to survive! <span class="emoji">&#x1F449</span></div>';
}

function Trainee() {
    Student.call(this);
}

Trainee.prototype.createCard = function() {
    document.getElementById('out').innerHTML += '<div class="block"><span class="title">Trainee:</span> I have no idea what i am doing! <span class="emoji">&#x1F449</span></div>';
}

function Developer() {
    this.slogan = "I'm God!";
}

Developer.prototype.createCard = function() {
    document.getElementById('out').innerHTML += '<div class="block"><span class="title">Developer:</span>Developer almighty! <span class="emoji">&#x270C</span></div>';
}

var human = new Human(),
    schoolchild = new Schoolchild(),
    student = new Student(),
    trainee = new Trainee(),
    developer = new Developer();

var chain = [];
chain.push(human, schoolchild, student, trainee, developer);

chain.forEach(function(item,i) {
    console.log(item);
    chain[i].createCard();
});