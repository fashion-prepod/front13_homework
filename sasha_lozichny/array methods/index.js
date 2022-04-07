// Task_1. Дана строка "Мы любим javascript"
// изменить эту строку на "Мы ОБОЖАЕМ javascript"

let string = "Мы любим javascript";
let arr = string.split(" ");
arr.splice(1, 1, "ОБОЖАЕМ");
let stringChanged = arr.join(' ');
console.log(stringChanged);

