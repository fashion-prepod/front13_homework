// 2.
// "пробежаться" по массиву и добавить каждому футболисту метод .sayHello()
// который выводит сообщение вида "Hello! My name is PLAYER_NAME"
// создайте функцию presentation(callback), которая выводит сообщение вида
// "Ladies and Gentleman here is..." после чего запускает callback

// в качестве коллбэка передайте метод .sayHello() каждого
// футболиста (используйте .forEach())

// const fbPlayers = [
//   {
//     name: "Messi",
//     speed: 2,
//   },
//   {
//     name: "Ronaldo",
//     speed: 10,
//   },
//   {
//     name: "Zidane",
//     speed: 200,
//   },
// ];

// function sayHello() {
//   console.log(`Hello! My name is ${this.name}`);
// }

// fbPlayers.forEach((player) => {
//   player.sayHello = sayHello;
// });

// function presentation(callback) {
//     console.log('Ladies and Gentleman here is...');
//     callback();
// }

// fbPlayers.forEach(player=>{
//     presentation(sayHello.bind(player))
// })


// 3.
// заставьте person сделать bark()

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

// dog.bark.apply(person);
