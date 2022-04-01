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

// //Task_4
// Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

// let sum = 0;
// for (a = 0; ; a++) {
//   let num = prompt("enter your numbers");
//   if (isNaN(num) || num === "") {
//     alert("wrong value: enter your numbers");
//     break;
//   }
//   if (num !== null) {
//     num = +num;
//     sum += num;
//   } else {
//     alert("result: " + sum / a);
//     break;
//   }
// }

//Task_5
// Проверка на таблицу умножения
// Пользователь вводит два случайных числа
// После чего вводит еще одно число, которое должно являться произведением
// первых двух
// Если пользователь ввел правильное произведение вывести собщение что он молодец!
// Если нет, выводим пользователю правильный ответ.

// for (let i = 0; ; i++) {
//   let userNumber = prompt("enter your first number");
//   let userNumber_2 = prompt("enter your second number");
//   let multiplication = prompt("enter multiplication your numbers");
//   if (
//     isNaN(userNumber) ||
//     isNaN(userNumber_2) ||
//     userNumber === "" ||
//     userNumber_2 === "" ||
//     userNumber === null ||
//     userNumber_2 === null
//   ) {
//     alert("enter your numbers");
//     break;
//   }
//   userNumber = +userNumber;
//   userNumber_2 = +userNumber_2;
//   multiplication = +multiplication;
//   if (multiplication !== userNumber * userNumber_2) {
//     multiplication = userNumber * userNumber_2;

//     alert(`result: ${multiplication}`);
//   } else {
//     alert(`Good`);
//   }
// }

// //Task_6
// Под диваном живет 100 хомячков.
// Пользователь вводит число хомячков,
// которое он хочет достать из-под дивана.
// Если число оставшихся хомячков меньше
// чем число, которое ввел пользователь
// вывести сообщение.

// let hamstersAmount = 100;
// for (let attempts = 1; ; attempts++) {
//     let userHamstersAmount = prompt('how many hamsters do u wanna get ?');
//     if (isNaN(userHamstersAmount) || userHamstersAmount === '') {
//         alert('please enter correct number');
//         continue;
//     } else if (userHamstersAmount === null) {
//         alert(`you've cancelled the game`);
//         break;
//     }
//     userHamstersAmount = +userHamstersAmount;
//     if (hamstersAmount === userHamstersAmount) {
//         alert(`you got all hamsters in ${attempts} times`);
//         break;
//     } else if (userHamstersAmount > hamstersAmount) {
//         alert('too much, there is no such amount of hamsters');
//     } else {
//         hamstersAmount = hamstersAmount - userHamstersAmount;
//         alert(`you successfully got ${userHamstersAmount} hamsters`);
//     }
// }

