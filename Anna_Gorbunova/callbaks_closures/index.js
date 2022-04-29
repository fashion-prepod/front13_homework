// 1.
// Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

// function toggleMe () {
//     let meeting = true;
//     return function() {
//         meeting = !meeting;
//         return meeting;
//     }
// }
// let result = toggleMe();
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());


// 2. 
// Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0

// function funcCounter(num) {
//     let count = num;
//     let action = num;
//     return function() {
//         if (action <= 100) {
//             return count++;
//         } else if (action > 100 && count >= 0) {
//             return count--;
//         }
//         return 'The end';
//     }

// }
// let counter = funcCounter(108);
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());