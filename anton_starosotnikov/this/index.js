//Task 1
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

// написать функцию run которая выводит сообщение типа
// "PLAYER_NAME runs with PLAYER_SPEEDkm/h"
// "пробежать" по массиву fbPlayers и запустить run "от имени" каждого футболиста

// function run() {
//     console.log(`${this.name} runs with ${this.speed}km/h`);
// }
// fbPlayers.forEach(obj => run.call(obj));

//Task 2

// 2. "пробежаться" по массиву и добавить каждому футболисту метод .sayHello()
// который выводит сообщение вида "Hello! My name is PLAYER_NAME"
// создайте функцию presentation(callback), которая выводит сообщение вида
// "Ladies and Gentleman here is..." после чего запускает callback

// в качестве коллбэка передайте метод .sayHello() каждого 
// футболиста (используйте .forEach())

// function sayHello() {
//     console.log(`Hello! My name is ${this.name}`);
// };
// function presentation(callback) {
//     console.log("Ladies and Gentleman here is...");
//     callback.forEach(obj => obj.sayHello = sayHello.call(obj)); // Может я не так понял условие задачи, но это решение мне кажется логичным.
// }
// presentation(fbPlayers); // в качестве коллбека передаю массив объектов.


// Почитал еще раз условие и понял что имелось ввиду вот так...
// function sayHello() {
//     console.log(`Hello! My name is ${this.name}`);
// };
// fbPlayers.forEach(fb => fb.sayHello = sayHello);
// function presentation(callback) {
//     console.log("Ladies and Gentleman here is...");
//     callback();
// };
// fbPlayers.forEach(fb => presentation(sayHello.bind(fb)));


// Task 3
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

// заставьте person сделать bark()

// dog.bark.call(person);


