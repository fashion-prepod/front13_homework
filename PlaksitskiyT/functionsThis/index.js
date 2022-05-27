
const fbPlayers = [
    {
        name: 'Messi',
        speed: 2
    },
    {
        name: 'Ronaldo',
        speed: 10
    },
    {
        name: 'Zidane',
        speed: 200
    }
];

// 2. "пробежаться" по массиву и добавить каждому футболисту метод .sayHello()
// который выводит сообщение вида "Hello! My name is PLAYER_NAME"
// создайте функцию presentation(callback), которая выводит сообщение вида
// "Ladies and Gentleman here is..." после чего запускает callback

// в качестве коллбэка передайте метод .sayHello() каждого 
// футболиста (используйте .forEach())

function sayHello() {
    console.log(`Hello! My name is ${this.name}`);
};

function presentation(callback) {
        console.log(`Ladies and Gentleman here is...`);
        callback()
    };
fbPlayers.forEach((item) => {
    presentation(item.sayHello = sayHello.bind(item));
});




// fbPlayers.forEach((item) => {
//     presentation(item.sayHello = sayHello.bind(item));
// })