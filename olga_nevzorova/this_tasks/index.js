// 1.
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

// написать функцию run которая выводит сообщение типа
// "PLAYER_NAME runs with PLAYER_SPEEDkm/h"
// "пробежать" по массиву fbPlayers и запустить run "от имени" каждого футболиста

function run() {
    console.log(`${this.name} runs with ${this.speed} km/h`)
}

fbPlayers.forEach((item) => { run.call(item) })


// 2. "пробежаться" по массиву и добавить каждому футболисту метод .sayHello()
// который выводит сообщение вида "Hello! My name is PLAYER_NAME"
// создайте функцию presentation(callback), которая выводит сообщение вида
// "Ladies and Gentleman here is..." после чего запускает callback

// в качестве коллбэка передайте метод .sayHello() каждого 
// футболиста (используйте .forEach())



function sayHello() {
    console.log(`Hello! My name is ${this.name}`)
}

function presentation(callback) {
    console.log(`Ladies and Gentleman here is...`)
    callback()
}

fbPlayers.forEach((item) => {
    presentation(item.sayHello = sayHello.bind(item));
})