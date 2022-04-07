// 1. Дана строка "Мы любим javascript"
// изменить эту строку на "Мы ОБОЖАЕМ javascript"

let string1 = "Мы любим javascript";
const arr = string1.split(" ");
arr.splice(1, 1, "обожаем");
let string2 = arr.join(" ");
console.log(string2);