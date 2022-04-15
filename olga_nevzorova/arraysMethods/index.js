// 1. Дана строка "Мы любим javascript"
// изменить эту строку на "Мы ОБОЖАЕМ javascript"


let str = 'Мы любим javascript';
let res = str.split(' ');
res.splice(1, 1, 'ОБОЖАЕМ');
console.log(res.join(' '));


