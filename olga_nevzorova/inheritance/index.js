// Human

function Human(name, age) {
    this.name = name;
    this.age = age;
}

function sayHi() {
    return 'Hi';
}

const person = new Human('Slava', 31);
Human.prototype.sayHi = sayHi;

console.log(person);
console.log(person.sayHi());

// Programmer

function Programmer(technologies) {
    Human.apply(this, Array.prototype.slice.call(arguments, 1));
    this.technologies = technologies;
}

function startCoding() {
    return `${this.name} is coding using ${this.technologies}`;
}

Programmer.prototype = Object.create(Human.prototype);
Programmer.prototype.startCoding = startCoding;

const it = new Programmer(['HTML', 'CSS', 'JS'], 'David', 40);
console.log(it);
console.log(it.startCoding());

// Sportsmen

function Sportsmen(medals) {
    Human.apply(this, Array.prototype.slice.call(arguments, 1));
    this.medals = medals;
}

Sportsmen.prototype = Object.create(Human.prototype);

const sport = new Sportsmen(2, 'Piter', 30);
console.log(sport);

// FootballPlayer

function FootballPlayer(team) {
    Sportsmen.apply(this, Array.prototype.slice.call(arguments, 1));
    this.team = team;
}

function run(speed) {
    return `${this.name} is running ${speed} kmph`
}

FootballPlayer.prototype = Object.create(Sportsmen.prototype);
FootballPlayer.prototype.run = run;

const football = new FootballPlayer('Dinamo', 4, 'Kirill', 40);
console.log(football);
console.log(football.run(6));

// HockeyPlayer

function HockeyPlayer(weight) {
    Sportsmen.apply(this, Array.prototype.slice.call(arguments, 1));
    this.weight = weight;
}

function pushOpponent(opponentName) {
    return `${opponentName} pushed ${this.name} used ${this.weight}kgs`;
}

HockeyPlayer.prototype = Object.create(Sportsmen.prototype);
HockeyPlayer.prototype.pushOpponent = pushOpponent;

const hockey = new HockeyPlayer(132, 4, 'Vasia', 32);
console.log(hockey);
console.log(hockey.pushOpponent('Bill'));