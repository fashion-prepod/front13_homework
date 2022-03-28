// Task 1 Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null)

// let userNum = prompt('enter last number');

// if (userNum !== null && !isNaN(userNum) && +userNum >= 1) {
//     userNum = +userNum;
//     let sum = 0;

//     for (let i = 1; i <= userNum; i++) {
//         sum += i;
//     }
//     console.log(`sum from 1 to ${userNum} = ${sum}`);
// } else {
//     console.log('dont work');
// }

// Task 2 Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

// let userNum = prompt('Enter number of numbers');

// if (userNum !== null && !isNaN(userNum) && userNum > 0) {
//     userNum = +userNum;
//     let positive = 0;
//     let negative = 0;
//     let zero = 0
//     for (let i = 1; i <= userNum; i++) {
//         let num = prompt(`Enter ${i} number`);
//         if (num !== null && !isNaN(num)) {
//             num = +num;
//             if (num > 0) {
//                 positive++;
//             } else if (num < 0) {
//                 negative++;
//             } else {
//                 zero++;
//             }
//         } else {
//             console.log('You enter not a number or cancel')
//         }   
//     }
//     console.log(`positive = ${positive}, negative = ${negative}, zero = ${zero}`)
// } else {
//     console.log('You enter not a number or cancel')
// }

// Task 3 Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// let limit = 100;
// for (let i = 10; i <= limit; i++) {
//     if (i%4 === 0 && i%6 !== 0) {
//         console.log(i)
//     }
// }

// Task 4 Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.
// let sum = 0;
// let count = 0;

// for (;;) {
//     let userNum = prompt('Enter your number');
//     if (userNum === null) {
//         break
//     }
//     userNum = +userNum
//     count++
//     sum = sum + userNum;
    
// }
// let result = sum / count;
// console.log(result)

// Task 5 
// Проверка на таблицу умножения
// Пользователь вводит два случайных числа
// После чего вводит еще одно число, которое должно являться произведением 
// первых двух
// Если пользователь ввел правильное произведение вывести собщение что он молодец!
// Если нет, выводим пользователю правильный ответ.

// const userNumOne = +prompt('Enter number one');
// const userNumTwo = +prompt('Enter number two');
// const userMultNum = +prompt('Enter the multiplication of the previous two numbers')
// const result = userNumOne * userNumTwo;
// console.log(result === userMultNum ? 'You doing fine' : `${result}`)

// Task 6 
// Под диваном живет 100 хомячков.
// Пользователь вводит число хомячков,
// которое он хочет достать из-под дивана.
// Если число оставшихся хомячков меньше
// чем число, которое ввел пользователь
// вывести сообщение.

// let humsterAmount = 16;

// for (let count = 1;; count++) {
//     let userHumsterAmount = prompt('Введите кол-во хомяков, которое хотите достать');
//     if (userHumsterAmount === null) {
//         alert('Вы закрыли игру');
//         break;
//     } else if (isNaN(userHumsterAmount)) {
//         alert('Вы ввели не число, попробуйте снова');
//         continue;
//     }
//     userHumsterAmount = +userHumsterAmount;
//     if (userHumsterAmount === humsterAmount) {
//         alert(`Урааа, Вы достали ${humsterAmount} хомяков за ${count} попыток`);
//         break;
//     } else if (userHumsterAmount < humsterAmount) {
//         alert(`Вы достали ${userHumsterAmount} хомяков`);
//         humsterAmount -= userHumsterAmount;
//     } else if (userHumsterAmount > humsterAmount) {
//         alert(`Под диваном осталось меньше хомяков чем ${userHumsterAmount}, введите число поменише`);
//     }
// }

// Task 7 
// Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
// чисел от n до m.
// Например:
// Ввели число 2
// Ввели число 5
// выводим: 2*2 потом 3*3 потом 4*4 потом 5*5

// const userNumOne = prompt('Enter number one');
// const userNumTwo = prompt('Enter number two');

// for (let i = userNumOne; i <= userNumTwo; i++) {
//     console.log(i*i);
// }

// Task 8
// Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.

// const userNum = prompt('Enter you number');
// for (let i = userNum; i >= 0 ; i--) {
//     console.log(i);
// }

// Task 9
// Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

// let userNum = +prompt('Enter you number');
// for (let i = 0; i < 4; i++) {
//     let userNumMore = +prompt('Enter a number greater than the previous one');
//     if (userNum >= userNumMore) {
//         alert('Error')
//         break
//     }
//     userNum = userNumMore
// }

// Task 10
// Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"

// const userNum = prompt('Enter you number');
// let text = ''

// for (let i = 0; i < userNum; i++) {
//     text += 'за'
// }
// console.log(`${text}ика`)


//Task 11
// Пользователь вводит год своего рождения
// вывести в консоль инфу сколько пользователю было в разные года до текущего
// например: 
// вводим 2003:
// выводим: в 2003 было 1 год
// в 2004 было 2 год
// в 2005 было 3 год 
// и тд
// в 2022 было 19 год

// const userBirthday = +prompt('Введите год своего рождения');
// let userAge = 1;
// for (let year = userBirthday; year <= 2022; year++) {
//     console.log(`в ${year} было ${userAge}`);
//     userAge++
// }

//Task 12
// Пользователь вводит свой возраст. Вывести в консоль 
// сколько лет юудет пользователю каждый год до 2030
// например вводим 14:
// выводим:
// в 2023 будет 15
// в 2024 будет 16
// и тд
// в 2030 будет 22

// let userAge = +prompt('Введите свой возраст');

// for (let nextYear = 2023; nextYear <= 2030; nextYear++) {
//     console.log(`в ${nextYear} будет ${++userAge}`);
// }

//Task 13
// Пользователя спрашивают пароль
// если пароль введен неправильно, спрашивать еще раз
// если правильно вывести "добро пожаловать"
// если отмена вывести "вход отменен"

// const correctPassword = 12345;
// for (;;) {
//     let userPass = prompt('Введите пароль');
//     if (userPass === null) {
//         console.log('Вход отменен');
//         break;
//     }
//     userPass = +userPass
//     if (userPass === correctPassword) {
//         console.log('Добро пожаловать');
//         break;
//     } else {
//         console.log('Введите пароль снова');
//     }
// }

//Task 14
// Пользователь вводит число n, вывести на экран все четные числа от 1 до n

// const userNum = +prompt('Введите число');
// for (let i = 1; i <= userNum; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }