//Array methods
//Task 1 Дана строка "Мы любим javascript"
// изменить эту строку на "Мы ОБОЖАЕМ javascript"

// let str = 'Мы любим javascript';
// const arr = str.split(' ');
// arr.splice(1, 1, 'ОБОЖАЕМ');
// str = arr.join(' ');
// console.log(str);


//Task 2 Даны два массива
// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве1 добавьте его копию в массив2
// 2. Пользователь вводит имя, если это имя есть в массиве2 удалите это имя из массива
// 3. Создайте новый массив только из тех имен, которые есть в обоих массивах
// 4. Объедините два массива так, чтобы в получившемся массиве не было одинаковых имен

let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// const userName = prompt('Enter name');

// for (let i = 0; i < people1.length; i++) {
//     if (people1[i] === userName) {
//         people2.push(userName);
//     }
// }
// console.log(people2);

// for (let i = 0; i < people2.length; i++) {
//     if (people2[i] === userName) {
//         people2.splice(i, 1);
//     }
// }
// console.log(people2);

// let newArr = [];
// for (let i = 0; i < people1.length; i++) {
//     for (let j = 0; j < people2.length; j++) {
//         if (people1[i] === people2[j]) {
//             newArr.push(people1[i]);
//         }
//     }
// }
// console.log(newArr);

// let arrConcat = people1.concat(people2);
// let newUnicNameArr = [];
// for (let i = 0; i < arrConcat.length; i++) {
//     if (!newUnicNameArr.includes(arrConcat[i])) {
//         newUnicNameArr.push(arrConcat[i]);
//     }
// }
// console.log(newUnicNameArr);
