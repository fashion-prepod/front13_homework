class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const newHuman = new Human("Valerchik", 65);
newHuman.sayHi();

class Programmer extends Human {
  constructor(name, age, technologies) {
    super(name, age);
    this.technologies = technologies;
  }
  startCoding() {
    console.log(`${this.name} is coding using ${this.technologies}`);
  }
}

const newProgrammer = new Programmer("Petya", 33, ["JS", "HTML"]);
newProgrammer.startCoding();
newProgrammer.sayHi();

class Sportsman extends Human {
  constructor(name, age, medals) {
    super(name, age, medals);
    this.medals = medals;
  }
}

const newSportsman = new Sportsman("Vova", 46, 7);
console.log(newSportsman);

class FootballPlayer extends Sportsman {
  constructor(name, age, medals, team) {
    super(name, age, medals, team);
    this.team = team;
  }
  run(speed) {
    console.log(`${this.name} is running ${speed} kmph`);
    this.speed = speed;
  }
}
const newFootballPlayer = new FootballPlayer("Zidane", 49, 5, "Gomel");
newFootballPlayer.run(20);
console.log(newFootballPlayer);

class HockeyPlayer extends Sportsman {
  constructor(name, age, medals, weight) {
    super(name, age, medals, weight);
    this.weight = weight;
  }
  pushOpponent(opponentName) {
    console.log(
      `${this.name} pushed ${opponentName} and used ${this.weight}kgs`
    );
  }
}

const newHockeyPlayer = new HockeyPlayer("Valodya", 36, 6, 89);
console.log(newHockeyPlayer);
newHockeyPlayer.pushOpponent("Mihas");
newFootballPlayer.sayHi();
newHockeyPlayer.sayHi();
newSportsman.sayHi();

