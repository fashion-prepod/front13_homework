class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    sayHi() {
       return console.log(`Hi, my name is ${this.name}`);
    };
}
class Programmer extends Human {
    constructor (name, age, technologies) {
    super(name, age);
    this.technologies = technologies;
    };
    startCoding() {
        return console.log(`${this.name} is coding using ${this.technologies}`);
    };
}

class Sportsman extends Human {
    constructor(name, age, medals) {
        super(name, age);
        this.medals = medals;
    }
}

class FootballPlayers extends Sportsman {
    constructor(name, age, medals, team){
        super(name, age, medals);
        this.team = team;
    }
    run(speed){
        return console.log(`${this.name} is running ${speed} km/h`);
    };
}
class HockeyPlayers extends Sportsman {
    constructor(name, age, medals, weight){
        super(name, age, medals);
        this.weight = weight;
    }
    pushOpponent(opponentName){
        return console.log(`${this.name} pushed ${opponentName} and used ${this.weight} kgs`);
    };
}

const human = new Human("Gentos", 35);
const programmer = new Programmer("Tolyan", 30, ['HTML', 'CSS', 'Js', 'React']);
const sportsman = new Sportsman("Sashok", 28, 100);
const footballPlayer = new FootballPlayers("David", 30, 1, "Gomel");
const hockeyPlayer = new HockeyPlayers("Tolya", 25, 5, 100);

console.log(human);
console.log(programmer);
console.log(sportsman);
console.log(footballPlayer);
console.log(hockeyPlayer);
human.sayHi();
programmer.startCoding();
footballPlayer.run(10);
hockeyPlayer.pushOpponent(`Ovechkin`);

