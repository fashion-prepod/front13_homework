class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    sayHi() {
        return console.log(`Hi, my name is ${this.name}`);
    };
}

class Programmer extends Human {
    constructor(name, age, stack) {
        super(name, age);
        this.stack = stack;
    };
    startCoding() {
        return console.log(`${this.name} is coding using ${this.stack}`);
    };
}

class Sportsman extends Human {
    constructor(name, age, medals) {
        super(name, age);
        this.medals = medals;
    }
}
class FootballPlayer extends Sportsman {
    constructor(name, age, medals, team) {
        super(name, age, medals);
        this.team = team;
    }
    run(speed) {
        return console.log(`${this.name} is running ${speed} kmph`);
    }
}
class HockeyPlayer extends Sportsman {
    constructor(name, age, medals, weight) {
        super(name, age, medals);
        this.weight = weight;
    }
    pushOpponent(opponentName) {
        return console.log(`${this.name} pushed ${opponentName} and used ${this.weight} kgs`);
    }
}
const human = new Human('Victor', 28);
const programmer = new Programmer('Anton', 29, ['HTML', 'CSS', 'Js', 'React']);
const sportsman = new Sportsman('Valerchik', 55, 1);
const footballPlayer = new FootballPlayer('Kolya', 60, 5, 'Old mans');
const hockeyPlayer = new HockeyPlayer('Egor', 15, 3, 55);

console.log(human);
console.log(programmer);
console.log(sportsman);
console.log(footballPlayer);
console.log(hockeyPlayer);
human.sayHi();
programmer.startCoding();
footballPlayer.run(10);
hockeyPlayer.pushOpponent('Maksim');