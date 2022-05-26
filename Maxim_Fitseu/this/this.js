 
// 1. 

// написать функцию run которая выводит сообщение типа
// 'Player_name runs with Player_speed km/h'
// 'пробежать' по массиву fbPlayers и запустить run 'от имени' каждого футболиста


const fbPlayers = [
    {
        name: 'Messi',
        speed: 2,
    },
    {
        name: 'Ronaldo',
        speed: 10,
    },
    {
        name: 'Zidane',
        speed: 200,
    }
];

// function run () {
//     console.log(`${this.name} runs with ${this.speed} km/h`);
// };

// // const binderMessi = run.bind(fbPlayers[0]);
// // binderMessi('Messi', 2);
// // run.apply(fbPlayers[1]);
// // run.call(fbPlayers[2]);

// fbPlayers.forEach((fb) => run.call(fb));  /// для каждого из 

// 2. "пробежаться" по массиву и добавить каждому футболисту метод .sayHello()
// который выводит сообщение вида "Hello! My name is PLAYER_NAME"
// создайте функцию presentation(callback), которая выводит сообщение вида
// "Ladies and Gentleman here is..." после чего запускает callback

// в качестве коллбэка передайте метод .sayHello() каждого 
// футболиста (используйте .forEach())

 function sayHello() {
        console.log(`Hello! My name is ${this.name}`);
    };

    fbPlayers.forEach(fb => fb.sayHello = sayHello);
    function presentation(callback) {
        console.log("Ladies and Gentleman here is...");
        callback();
    };
    fbPlayers.forEach(fb => presentation(sayHello.bind(fb)));

// obj.b = function

//  3.  заставьте person сделать bark()

// const dog = {
//     name: 'Bobik',
//     bark: function () {
//         console.log(`${this.name} barks`)
//     }
// };

// const person = {
//     name: 'John',
//     age: 20
// };

// dog.bark.call(person); 