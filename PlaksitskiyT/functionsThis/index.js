// // 1. 
// const fbPlayers = [
//     {
//         name: 'Messi',
//         speed: 2
//     }, 
//     {
//         name: 'Ronaldo',
//         speed: 10
//     },
//     {
//         name: 'Zidane',
//         speed: 200
//     }
// ];

// // написать функцию run которая выводит сообщение типа
// // "PLAYER_NAME runs with PLAYER_SPEEDkm/h"
// // "пробежать" по массиву fbPlayers и запустить run "от имени" каждого футболиста

// function run () {
//     console.log(`${this.name} runs with ${this.speed} km/h`);
// };
// fbPlayers.forEach((players) => {
//     run.call(players);
//     });


// 2. "пробежаться" по массиву и добавить каждому футболисту метод .sayHello()
// который выводит сообщение вида "Hello! My name is PLAYER_NAME"
// создайте функцию presentation(callback), которая выводит сообщение вида
// "Ladies and Gentleman here is..." после чего запускает callback

// в качестве коллбэка передайте метод .sayHello() каждого 
// футболиста (используйте .forEach())


// 3. 
const dog = {
    name: 'Bobik',
    bark: function () {
        console.log(`${this.name} barks`)
    }
};

const person = {
    name: 'John',
    age: 20
};

// заставьте person сделать bark()

dog.bark.apply(person)