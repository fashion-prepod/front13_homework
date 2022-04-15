// 1. Дана строка "Мы любим javascript"
// изменить эту строку на "Мы ОБОЖАЕМ javascript"


let str = 'Мы любим javascript';
let res = str.split(' ');
res.splice(1, 1, 'ОБОЖАЕМ');
console.log(res.join(' '));


// 2.1. Пользователь вводит имя, если это имя есть в массиве1 добавьте его копию в массив2

let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Cannon', 'David', 'Ryan'];
let people2 = ['Cannon', 'Stanly', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

const userName = prompt();
const index = people1.indexOf(userName);
people2.push(people1[index]);
console.log(people2);
