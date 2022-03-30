// 1. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).

// let userNumber = prompt("enter a number");
// if (userNumber !== null && !isNaN(userNumber) && +userNumber > 1) {
//     userNumber = +userNumber;
//     let sum = 0;
//     for (let i = 1; i <= userNumber; i++) {
//         sum += i;
//     }
//     console.log(`sum from 1 to ${userNumber} is ${sum}`);
// } else {
//     console.log('dont work');
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

// const promptAmount = prompt('enter how many numbers do u wanna enter');
// let positive = 0;
// let negative = 0;
// let zero = 0;
// for (let i = 0; i < promptAmount && promptAmount !== null && !isNaN(promptAmount); i++) {
//     let userNumber = prompt('enter number');
//     if (userNumber === null || isNaN(userNumber)) {
//         console.log('dont work');
//         break;
//     }
//     userNumber = +userNumber;
//     if (userNumber > 0) {
//         positive++;
//     } else if (userNumber < 0) {
//         negative++;
//     } else {
//         zero++
//     }
// }
// console.log(positive, negative, zero);



// 3. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// for (let i = 10; i >= 10 && i < 100; i++) {
//     if (i % 4 === 0 && i % 6 !== 0) {
//         console.log(i);
//     }
// }



// 4. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.


// let i = 0;
// let sum = 0;
// let userNumber;
// for (userNumber = prompt("Enter number"); userNumber !== null; userNumber = prompt("Enter number")) {
//     if (isNaN(userNumber)) {
//         break;
//     }
//     userNumber = +userNumber;
//     i++;
//     sum = sum + userNumber;
// }
// if ((userNumber === null || isNaN(userNumber)) && sum !== 0) {
//     console.log(sum / i);
// } else {
//     console.log('dont work');
// }




// 5. Проверка на таблицу умножения
// Пользователь вводит два случайных числа
// После чего вводит еще одно число, которое должно являться произведением 
// первых двух
// Если пользователь ввел правильное произведение вывести собщение что он молодец!
// Если нет, выводим пользователю правильный ответ.



cikl: do {
    let userNumberOne;
    let userNumberTwo;
    let userProductNumbers;
    do {
        userNumberOne = prompt("Enter number one");
        if (isNaN(userNumberOne) || userNumberOne === '') {
            console.log('Try enter a number');
        } else if (userNumberOne === null) {
            console.log('You left the program');
            break cikl;
        }
    } while (isNaN(userNumberOne) || userNumberOne === '')
    userNumberOne = +userNumberOne;
    do {
        userNumberTwo = prompt("Enter number two");
        if (isNaN(userNumberTwo) || userNumberTwo === '') {
            console.log('Try enter a number');
        } else if (userNumberTwo === null) {
            console.log('You left the program');
            break cikl;
        }
    } while (isNaN(userNumberTwo) || userNumberTwo === '')
    userNumberTwo = +userNumberTwo;
    do {
        userProductNumbers = prompt(`Enter product of numbers ${userNumberOne}*${userNumberTwo}`);
        if (isNaN(userProductNumbers) || userProductNumbers === '') {
            console.log('Try enter a number');
        } else if (userProductNumbers === null) {
            console.log('You left the program');
            break cikl;
        }
    } while (isNaN(userProductNumbers) || userProductNumbers === '')
    userProductNumbers = +userProductNumbers;
    let productNumbers = userNumberOne * userNumberTwo;
    if (productNumbers === userProductNumbers) {
        console.log("молодец");
    } else {
        console.log(productNumbers);
    }
} while (true)




// 6.
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




// 7. Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
// чисел от n до m.
// Например:
// Ввели число 2
// Ввели число 5
// выводим: 2*2 потом 3*3 потом 4*4 потом 5*5


// let userNumberOne;
// do {
//     userNumberOne = prompt("Enter number one");
//     if (isNaN(userNumberOne) || userNumberOne === '') {
//         console.log('Try enter a number');
//     } else if (userNumberOne === null) {
//         console.log('You left the program');
//         break;
//     }
// } while (userNumberOne === '' || isNaN(userNumberOne))
// if (userNumberOne !== null) {
//     userNumberOne = +userNumberOne;
//     let userNumberTwo;
//     do {
//         userNumberTwo = prompt("Enter number two");
//         if (isNaN(userNumberTwo)) {
//             console.log('Try enter a number');
//         } else if (userNumberTwo === null || userNumberTwo === '') {
//             console.log('You left the program');
//             break;
//         }
//     } while (userNumberTwo === '' || isNaN(userNumberTwo))
//     userNumberTwo = +userNumberTwo;
//     const result = Math.pow(5, 2);
//     for (userNumberOne; userNumberOne <= userNumberTwo; userNumberOne++) {
//         console.log(Math.pow(userNumberOne, 2));
//     }
// }



// 8. Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.

// let userNumber = prompt("Enter number");
// if (userNumber !== null && !isNaN(userNumber) && userNumber !== '') {
//     userNumber = +userNumber
//     for (userNumber; userNumber !== -1; userNumber--) {
//         console.log(userNumber);
//     }
// } else {
//     console.log('dont work');
// }




// 9. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

// let userNumber;
// cikl: for (let i = 1; i < 6; i++) {
//     let number = userNumber;
//     do {
//         userNumber = prompt(`Enter number ${i}`);
//         if (isNaN(userNumber) || userNumber === '') {
//             console.log('Try enter a number');
//         } else if (userNumber === null) {
//             console.log('You left the program');
//             break cikl;
//         }
//     } while (userNumber === '' || isNaN(userNumber))
//     if (userNumber !== null && !isNaN(userNumber)) {
//         if (number > userNumber) {
//             console.log('error');
//             break;
//         }
//     }
// }



// 10. Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"


// do {
//     let i = prompt('Enter number');
//     if (i === null) {
//         console.log('You left the program');
//         break;
//     } else if (isNaN(i) || i === '') {
//         console.log('Try enter a number')
//         continue;
//     }
//     console.log(`${'за'.repeat(+i)}ика`);
// } while (true)



// 11 Пользователь вводит год своего рождения
// вывести в консоль инфу сколько пользователю было лет
// в разные года до 2022
// например:
// вводим 2003:
// выводим:
// в 2003 было 1;
// в 2004 было 2;
// и тд до 2022.

// let userYear = prompt('Enter your year born');
// if (userYear !== null && !isNaN(userYear) && userYear !== '') {
//     userYear = +userYear;
//     for (let i = 0; userYear <= 2022; userYear++, i++) {
//         console.log(`in ${userYear} it was ${i} years old`);
//     }
// }
// else {
//     console.log('dont work');
// }




// 12 Пользователь вводит свой возраст. Вывести в консоль сколько лет
// будет пользователю каждый год до 2030
// например вводим: 14
// выводим:
// в 2023 будет 15
// в 2024 будет 16
// и тд до 2023


// let userYear = prompt('Enter your years old');
// if (userYear !== null && !isNaN(userYear) && userYear !== '' && +userYear <= 100) {
//     userYear = +userYear;
//     for (let Year = 2023; Year <= 2030; Year++) {
//         console.log(`in ${Year} will be ${++userYear}`);
//     }
// } else {
//     console.log('dont work');
// }




// 13 Пользователя спрашивают пароль
// если пароль введен неправильно, спрашивать еще раз
// если правильно вывести 'Добро пожаловать'
// если отмена вывести 'вход отменен'

// const userPasswod = '123qwe';
// let userControl;
// do {
//     userControl = prompt('Enter your passwod');
//     if (userPasswod === userControl) {
//         console.log('Welcome')
//     } else if (userControl === null) {
//         console.log('enter canceled');
//         break;
//     }
// } while (userPasswod !== userControl)





// 14 Пользователь вводит число n, вывести на экран все четные числа от 1 до n

// let userNumber = prompt('Enter number');
// if (userNumber !== null && !isNaN(userNumber) && userNumber !== '') {
//     userNumber = +userNumber;
//     for (let i = 1; i <= userNumber; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// } else {
//     console.log('dont work');
// }
