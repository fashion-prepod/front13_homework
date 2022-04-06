// 1. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).

// let numberN = prompt("Enter a number");
// if (isNaN(numberN) || numberN < 1) {
//   console.log("Enter the correct number");
// } else {
//   numberN = +numberN;
//   let sumNumber = 0;
//   for (let i = 1; i <= numberN; i++) {
//     sumNumber += i;
//   }
//   console.log(sumNumber);
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

// 3. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// for (let i = 10; 100 > i; i++) {
//   if (i % 4 === 0 && i % 6 !== 0) {
//     console.log(i);
//   }
// }

// 4. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

// let sumNumber = 0;
// let counterNumber = 0;
// for (; ; counterNumber++) {
//   let number = prompt("Enter a number");
//   if (number !== null) {
//     number = +number;
//     sumNumber += number;
//   } else {
//     break;
//   }
// }
// console.log(`Arithmetic mean of numbers ${sumNumber / counterNumber}`);

// 5. Проверка на таблицу умножения
// Пользователь вводит два случайных числа
// После чего вводит еще одно число, которое должно являться произведением
// первых двух
// Если пользователь ввел правильное произведение вывести собщение что он молодец!
// Если нет, выводим пользователю правильный ответ.

// const num1 = +prompt("enter num1");
// const num2 = +prompt("enter num2");
// const userResult = +prompt("enter num1 * num2");
// const correctResult = num1 * num2;
// if (num1 * num2 === userResult) {
//   console.log("molodetz");
// } else {
//   console.log(`this is worng, correct resutl is ${num1 * num2}`);
// }

// 6.
// Под диваном живет 100 хомячков.
// Пользователь вводит число хомячков,
// которое он хочет достать из-под дивана.
// Если число оставшихся хомячков меньше
// чем число, которое ввел пользователь
// вывести сообщение.

// let hamstersAmount = 100;
// for (let attempts = 1; ; attempts++) {
//   let userHamstersAmount = prompt("how many hamsters do u wanna get ?");
//   if (isNaN(userHamstersAmount) || userHamstersAmount === "") {
//     alert("please enter correct number");
//     continue;
//   } else if (userHamstersAmount === null) {
//     alert(`you've cancelled the game`);
//     break;
//   }
//   userHamstersAmount = +userHamstersAmount;
//   if (hamstersAmount === userHamstersAmount) {
//     alert(`you got all hamsters in ${attempts} times`);
//     break;
//   } else if (userHamstersAmount > hamstersAmount) {
//     alert("too much, there is no such amount of hamsters");
//   } else {
//     hamstersAmount = hamstersAmount - userHamstersAmount;
//     alert(`you successfully got ${userHamstersAmount} hamsters`);
//   }
// }

// 7. Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
// чисел от n до m.
// Например:
// Ввели число 2
// Ввели число 5
// выводим: 2*2 потом 3*3 потом 4*4 потом 5*5

// let numberN = prompt("Enter a number N");
// let numberM = prompt("Enter a number M");
// numberN = +numberN;
// numberM = +numberM;
// for (; numberN <= numberM; numberN++) {
//   console.log(numberN ** 2);
// }

// 8. Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.

// let numberN = prompt("Enter a number N");
// for (; numberN >= 0; numberN--) {
//   console.log(numberN);
// }

// 9. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

// let number1 = prompt("Enter a number");
// for (let i = 1; i < 5; i++) {
//   let number2 = prompt("Enter a number greater than the previous one");
//   number1 = +number1;
//   number2 = +number2;
//   if (number2 > number1) {
//     number1 = number2;
//   } else {
//     alert("error");
//   }
// }

// 10. Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"

// let number = prompt("Enter a number");
// // number=+number;
// let word = "ика";

// for (let i = 1; i <= number; i++) {
//   word = "за" + word;
// }
// console.log(word);

// 11. Пользователь вводит год своего рождения
// вывести в консоль инфу сколько пользователю было в разные года до текущего
// например:
// вводим 2003:
// выводим: в 2003 было 1 год
// в 2004 было 2 год
// в 2005 было 3 год
// и тд
// в 2022 было 19 год

// let date = prompt("Enter your date of birth");
// let age = 0;
// for (; date <= 2022; date++, age++) {
//   console.log(`в ${date} было ${age} год`);
// }

// 12. Пользователь вводит свой возраст. Вывести в консоль
// сколько лет будет пользователю каждый год до 2030
// например вводим 14:
// выводим:
// в 2023 будет 15
// в 2024 будет 16
// и тд
// в 2030 будет 22

// let age = prompt("Enter your age");
// let date = 2023;
// for (; date <= 2030; date++) {
//   age++;
//   console.log(`в ${date} году будет ${age}`);
// }

// 13. Пользователя спрашивают пароль
// если пароль введен неправильно, спрашивать еще раз
// если правильно вывести "добро пожаловать"
// если отмена вывести "вход отменен"

// let parol = prompt("Введите пароль");
// let truParol = "123";
// for (;;) {
//   if (parol !== truParol && parol !== null) {
//     parol = prompt("Введите пароль");
//   } else if (parol === null) {
//     alert("Вход отменет");
//     break;
//   } else {
//     alert("Добро пожаловать");
//     break;
//   }
// }

// 14. Пользователь вводит число n, вывести на экран все четные числа от 1 до n

// let numberN = prompt("Enter a number");
// numberN = +numberN;
// for (let i = 1; i <= numberN; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
