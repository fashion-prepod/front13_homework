// 3. 

// Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
//  делятся на 6.

// for (let i = 10; i < 100; i++ ) { 
//       if (i % 4 === 0 && i % 6 !== 0); {
//          console.log(i);
//       }
// }

// 4. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

// let number;
// let sum = 0;
// let i = 0;

// while (true) {
//     number = prompt ("Введите число");
//     if (number !== null) {
//         sum += +number;
//         i++;
//     } else {
//         break;
//     }
// }
// console.log (sum / i);

// 7.

// Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
// чисел от n до m.
// Например:
// Ввели число 2
// Ввели число 5
// выводим: 2*2 потом 3*3 потом 4*4 потом 5*5

// let firstNumber = +prompt("Start interval");
// let secondNumber = +prompt("End interval");
// for(let i = firstNumber; i <= secondNumber; i++) {
//     console.log(i**2);
// }

// 8.

// Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.

// let number = +prompt('Enter number');
// for (let i = number; i >= 0; i--) {
//     console.log(i);
// }

// 9.

// Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

let number = +prompt("Enter number");
for (let i = 0; i < 4; i++) {
   let nextNumber = +prompt("Enter number");
    if (number >= nextNumber) {
        console.log("Mistake");
        break;
    }
    number = nextNumber;
}

// 10.

// Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"

// let number = +prompt('enter number of za');
// let word = 'ika';
// for (i = 0; i < number; i++) {
//     word = 'za' + word;
// }
//     console.log(word);



        // Second Homework

// 1. Пользователь вводит год своего рождения
// вывести в консоль инфу сколько пользователю было в разные года до текущего
// например: 
// вводим 2003:
// выводим: в 2003 было 1 год
// в 2004 было 2 год
// в 2005 было 3 год 
// и тд
// в 2022 было 19 год

// let age = +prompt('Enter your birthday');
// let startAge = 1;


// for (i = age; i <= 2022; i++) {
//     console.log(`in ${i} was ${+startAge}`);
//     startAge++;
// }


// 2. Пользователь вводит свой возраст. Вывести в консоль 
// сколько лет юудет пользователю каждый год до 2030
// например вводим 14:
// выводим:
// в 2023 будет 15
// в 2024 будет 16
// и тд
// в 2030 будет 22

// let age = +prompt('Enter your age');
// startAge = 2022;
// for (i = startAge; i <= 2030; i++) {
//     console.log(`in ${i} will be ${age}`);
//     age++
// }



// 3. Пользователя спрашивают пароль
// если пароль введен неправильно, спрашивать еще раз
// если правильно вывести "добро пожаловать"
// если отмена вывести "вход отменен"

// let password = prompt('Enter password');
// let checkPass;
// for (let i = 0; ; i++) {
//     checkPass = prompt('Enter password');
//     if (checkPass === password) {
//         console.log('Correct password');
//         break;
//     } else if (checkPass === null) {
//         console.log('Enter cancelled');
//         break;
//     } else if (checkPass !== password) {
//         console.log('Uncorrect password');
//     }
// }

// 4. Пользователь вводит число n, вывести на экран все четные числа от 1 до n

// let n = +prompt('Enter number');

// for (i = 2; i <= n; i = i + 2) {
//     console.log(i);
// }
