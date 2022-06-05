class Human {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    sayHi() {
      console.log(`Hi, my name is ${this.name}`);
    }
  }
  
  const newHuman = new Human('Maxon', 22);
  
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
  
  const newProgrammer = new Programmer('Olega', 11, ['CSS' , 'JS']);
  newProgrammer.startCoding();
  newProgrammer.sayHi();
  
  class Sportsman extends Human {
    constructor(name, age, medals) {
      super(name, age, medals);
      this.medals = medals;
    }
  }
  
  const newSportsman = new Sportsman('Messi', 54, 1);
  console.log(newSportsman);
  
  class FootballPlayer extends Sportsman {
    constructor(name, age, medals, team) {
      super(name, age, medals, team);
      this.team = team;
    }
    run(speed) {
      console.log(`${this.name} is running ${speed} km/h`);
      this.speed = speed;
    }
  }

  const newFootballPlayer = new FootballPlayer('Valerchik', 15, 3, 'Minsk');
  newFootballPlayer.run(5);
  console.log(newFootballPlayer);
  
  class HockeyPlayer extends Sportsman {
    constructor(name, age, medals, weight) {
      super(name, age, medals, weight);
      this.weight = weight;
    }
    pushOpponent(opponentName) {
      console.log(
        `${this.name} pushed ${opponentName} and used ${this.weight} kgs`
      );
    }
  }
  
  const newHockeyPlayer = new HockeyPlayer('Aleksandr', 34, 3, 189);
  console.log(newHockeyPlayer);
  newHockeyPlayer.pushOpponent('Andrey');