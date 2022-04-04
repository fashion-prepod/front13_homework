//Array methods
//Task 1 Дана строка "Мы любим javascript"
// изменить эту строку на "Мы ОБОЖАЕМ javascript"

let str = 'Мы любим javascript';
const arr = str.split(' ');
arr.splice(1, 1, 'ОБОЖАЕМ');
str = arr.join(' ');
console.log(str);