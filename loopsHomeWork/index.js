// //Task_1
// Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).

// for (;;) {
//   let enterNumber = prompt("enter your number N");
//   if (!isNaN(enterNumber) && enterNumber !== null && +enterNumber >= 1) {
//     enterNumber = +enterNumber;
//     let sum = 0;
//     for (let i = 1; i <= enterNumber; i++) {
//       sum += i;
//     }
//     alert(`you entered a number ${enterNumber} sum is: ${sum}`);
//   } else {
//     alert("wrong value enter your number");
//   }
// }

// 2. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

// const promptAmount = +prompt("Enter haw many numbers do u wanna enter");
// let positive = 0;
// let negative = 0;
// let zeros = 0;
// for (let i = 1; i <= promptAmount; i++) {
//   let usernumber = +prompt("Enter number");

//   if (usernumber > 0) {
//     positive++;
//   } else if (usernumber < 0) {
//     negative++;
//   } else {
//     zeros++;
//   }
// }
// console.log(positive, negative, zeros);

//Task_3;
// Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// for (a = 10; a < 100; a++) {
//   if (a % 4 === 0 && a % 6 !== 0) {
//     console.log(a);
//   }
// }