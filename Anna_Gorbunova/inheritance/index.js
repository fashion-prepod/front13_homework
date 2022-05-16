class Human {

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHi() {
      console.log(`${this.name} says 'Hello!'`)
    }
  
  }
  
  const humanIvan = new Human('Ivan', 34);
  const humanMaria = new Human('Maria', 20);
  console.log(humanMaria);
  
  humanIvan.sayHi();
  humanMaria.sayHi();


  class Programmer extends Human {

    constructor(name, age, technologies) {
      super(name, age);
  
      this.technologies = technologies;
    }
  
    startCoding() {
      console.log(`${this.name} is coding using ${this.technologies}`);
    }
  
  }
  
  const programmerJon = new Programmer('Jon', 46, ['HTML', 'CSS', 'JS']);
  const programmerFred = new Programmer('Fred', 65, ['Angular', 'HTML', 'CSS']);
  console.log(programmerFred);
  programmerJon.startCoding();
  programmerFred.startCoding();
  programmerJon.sayHi();
  programmerFred.sayHi();


  class Sportsman extends Human {

    constructor(name, age, medals) {
      super(name, age);
  
      this.medals = medals;
    }
  
  }
  
  const sportsmanKate = new Sportsman('Kate', 27, 5);
  const sportsmanNil = new Sportsman('Nil', 29, 8);
  console.log(sportsmanKate);
  sportsmanKate.sayHi();
  sportsmanNil.sayHi();
  

  class FootballPlayer extends Sportsman {

    constructor(name, age, medals, team) {
      super(name, age, medals);
  
      this.team = team;
    }
  
    run(speed) {
      console.log(`${this.name} is running ${speed} km/h`);
    }
  
  }
  
  const footballPlayerNik = new FootballPlayer('Nik', 23, 10, 'Barcelona');
  const footballPlayerDima = new FootballPlayer('Dima', 21, 18, 'Spartak');
  console.log(footballPlayerDima);
  footballPlayerNik.run(5);
  footballPlayerDima.run(7);
  footballPlayerDima.sayHi();
  footballPlayerNik.sayHi();


  class HockeyPlayer extends Sportsman {

    constructor(name, age, medals, weight) {
      super(name, age, medals);
  
      this.weight = weight;
    }
  
    pushOpponent(opponentName) {
      console.log(`${this.name} pushed ${opponentName} and used ${this.weight} kgs`);
    }
  
  }
  
  const hockeyPlayerAndrei = new HockeyPlayer('Andrei', 33, 4, 90);
  const hockeyPlayerPeter = new HockeyPlayer('Peter', 26, 3, 96);
  console.log(hockeyPlayerAndrei);
  hockeyPlayerAndrei.pushOpponent('Stiv');
  hockeyPlayerPeter.pushOpponent('Ron');
  hockeyPlayerAndrei.sayHi();
  hockeyPlayerPeter.sayHi();
  