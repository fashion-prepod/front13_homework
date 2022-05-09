class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        return `Hi, my name is ${this.name}`;
    }
}

let Andy = new Human("Andy", 13);

console.log(Andy.sayHi());

class Programmer extends Human {
    constructor(name, age, technologies) {
        super(name, age);
        this.technologies = technologies; 
    }

    startCoding() {
        return `${this.name} is coding using ${this.technologies}`;
    }
}

let Max = new Programmer("Max", 22, ["HTML", "CSS"]);
console.log(Max.startCoding());

class Sportsman extends Human {
    constructor(name, age, medals) {
        super(name, age);
        this.medals = medals;
    }
}

let Valery = new Sportsman("Valery", 20, 8);
console.log(Valery.medals);

class FootballPlayer extends Sportsman {
    constructor(name, age, medals, team) {
        super(name, age, medals);
        this.team = team;
    }

    run(speed) {
        return `${this.name} is running ${speed} kmph`;
    }
}

let Messi = new FootballPlayer("Leo", 30, 100, "Barsa");
console.log(Messi.run(10));

class HockeyPlayer extends Sportsman {
    constructor(name, age, medals, weight) {
        super(name, age, medals);
        this.weight = weight;
    }

    pushOpponent(opponentName) {
        return `${this.name} pushed ${opponentName} and used ${this.weight}kgs`;
    }
}

let Henry = new HockeyPlayer("Henry", 34, 5, 98);
console.log(Henry.pushOpponent("Matthew"));

let Mitchell = new HockeyPlayer("Mitchell", 20, 4, 80);
console.log(Mitchell.pushOpponent("Zack"));