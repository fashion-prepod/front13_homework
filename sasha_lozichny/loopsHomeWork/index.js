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

// //Task_7
// Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
// чисел от n до m.
// Например:
// Ввели число 2
// Ввели число 5
// выводим: 2*2 потом 3*3 потом 4*4 потом 5*5

// for (let a = 0; ; a++) {
//   let userNumberOne = prompt("enter your number N");
//   let userNumberTwo = prompt("enter your number M");
//   if (
//     isNaN(userNumberOne) ||
//     isNaN(userNumberTwo) ||
//     userNumberOne === "" ||
//     userNumberTwo === "" ||
//     userNumberOne === null ||
//     userNumberTwo === null
//   ) {
//     alert("enter your numbers");
//     continue;
//   }
//   userNumberOne = +userNumberOne;
//   userNumberTwo = +userNumberTwo;
//   for (let i = userNumberOne; i <= userNumberTwo; i++) {
//     let multiplication = `${i} * ${i}`;
//     alert(multiplication);
//   }
// }

//Task_8
//Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.

// let userNumber = prompt("enter your number");
// userNumber = +userNumber;
// for (let i = userNumber; i >= 0; i--) {
//   alert(i);
// }

// //Task_9
// Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

// let userNumber = +prompt("enter your number");
// for (let i = 1; i < 5; i++) {
//   let nextUserNumber = +prompt("enter a number more than previous");
//   if (nextUserNumber <= userNumber) {
//     alert("enter correct value");
//     break;
//   }
//   userNumber = nextUserNumber;
// }

// // //Task_10
// //  Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// // (в слове "заика") равное этому числу.
// // Например:
// // Вводим 3
// // Программа выводит "зазазаика"
// // Вводим 5
// // Программа выводит "зазазазазаика"

// for (;;) {
//   let userNumber = prompt("enter your number from 1");
//   let a = "za";
//   let b = "ika";
//   let sum = a + b;
//   if (
//     userNumber === "" ||
//     userNumber === null ||
//     isNaN(userNumber) ||
//     userNumber <= 0
//   ) {
//     alert("enter your number");
//     continue;
//   }
//   userNumber = +userNumber;
//   for (let i = 1; i < userNumber; i++) {
//     sum = a + sum;
//   }
//   alert(sum);
// }

//Task_1
// Пользователь вводит год своего рождения, вывести в консоль инфу сколько пользователю
// было в разные года до текущего
// например:
// вводим 2003:
// выводим: в 2003 было 1 год
// в 2004 было 2 года
// в 2005 было 3 года
// и тд
// в 2022 было 19

// let userNumber = +prompt("enter your Date of Birth");
// for (let age = 0; userNumber <= 2022; userNumber++, age++) {
//   alert(`${userNumber} year+${age} year(s) old`);
// }

//Task_2
// Пользователь вводит свой возраст. Вывести в консоль
// сколько лет будет пользователю каждый год до 2030
// например: вводим 14:
// выводим:
// в 2023 будет 15
// в 2024 будет 16
// и тд
// в 2023 будет 22

// let userNumber = +prompt("enter your age");
// for (let data = 2022; data <= 2030; userNumber++, data++) {
//   alert(`${data} year ${userNumber}years old`);
// }

//Task_3;
// Пользователя спрашивают пароль
// если пароль введен неправильно, спрашивать еще раз
// если правильно, вывести 'добро пожаловать'
// если отмена, вывести 'вход отменен'

// let userPassword = prompt("enter your password");
// let good = "good";
// for (let i = 0; ; i++) {
//   if (userPassword === good) {
//     alert("welcome");
//     break;
//   } else if (userPassword === null) {
//     alert("entry canceled");
//     break;
//   }
//   if (userPassword !== good) {
//     userPassword = prompt("enter your password");
//     continue;
//   }
// }

//Task_4
// Пользователь вводит число n, вывести на экран все четные числа от 1 до n.

// let userNumber = +prompt("enter your number");
// for (let i = 1; i < userNumber; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

