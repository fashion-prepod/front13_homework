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


// 2.2. Пользователь вводит имя, если это имя есть в массиве2 удалите это имя из массива

let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Cannon', 'David', 'Ryan'];
let people2 = ['Cannon', 'Stanly', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

const userName = prompt();
const index = people2.indexOf(userName);
people2.splice(index, 1);
console.log(people2);






// 2.3. Создайте новый массив только из тех имен, которые есть в обоих массивах

let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Cannon', 'David', 'Ryan'];
let people2 = ['Cannon', 'Stanly', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
let arr = [];
for (i = 0; i <= 7; i++) {
    if (people2.indexOf(people1[i]) !== -1) {
        arr.push(people1[i]);
    }
}
console.log(arr);
