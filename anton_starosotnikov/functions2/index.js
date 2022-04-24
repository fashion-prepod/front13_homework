// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

// function toggler() {
//     let bool = true;
//     return function() {
//         return bool = !bool;
//     }
// }

// const toogleMe = toggler();
// console.log(toogleMe());
// console.log(toogleMe());
// console.log(toogleMe());


// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0

// function countCreator(callback) {
//     let count = callback;
//     return function counter() {
//         if (callback < 100) {
//             return ++count;
//         } else {
//             return count !== 0 ? --count : count;
//         }
//     } 
// }

// const funcCounter = countCreator(101);

// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());