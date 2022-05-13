class Human {
    sayHi = function(){
        console.log(`my name is ${this.name}, hello!`)
    }
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
}

const hm = new Human ('Appolinarius', 23);
hm.sayHi();

class Programmer extends Human {
    constructor(name, age, technologies){
    super(name, age,  technologies);
    }
    startCoding = function (){
        console.log(`${this.name} is coding using HTML, CSS, JS`)  
    }
}

const pr = new Programmer ('Tikhomir', 26, ['HTML', 'CSS', 'JS']);
pr.startCoding();

class Sportsman extends Human {
    constructor(name, age, medal){
        super(name, age, medal);
        this.medal = medal;
    } 
 }

const sp = new Sportsman ('Mirolyub', 26, 3);
console.log(sp);

class FootballPlauer extends Sportsman {
    constructor(name, age, medal, team){
        super(name, age, medal, team );
        this.team = team;
    }
    run = function(speed){
        console.log(`${this.name} is running ${this.speed} kmph`)  
        this.speed = speed;
    }
}

const ft = new FootballPlauer ('Dobrynya', 26, 3, 'Bate Gomel');
ft.run(12);
console.log(ft);

class HoskeyPlayer extends Sportsman {
    constructor(name, age, medal,  weight){
    super(name, age, medal,  weight );
    this.weight = weight;
}
    pushOpponent = function(opponentName){
       console.log(
        `${this.name} pushed ${opponentName} and used ${this.weight}kgs`
      );
}
}

const hp = new HoskeyPlayer ('Velimudr', 30, 3, 90);
console.log(hp);
hp.pushOpponent('Miloneg');
pr.sayHi();
ft.sayHi();
hp.sayHi();