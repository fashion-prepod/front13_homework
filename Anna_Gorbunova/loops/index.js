// 4
// Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.


// let sum = 0;

// for(let i = 0; ; i++) {
    
//     let userNumber = prompt('Enter number', '');

//     if(userNumber !== null) {

//         userNumber = Number(userNumber);
//         sum += userNumber;
//     } else {
//         let result = sum / i;
//         alert(`Result is ${result}`);
//         break;
//     }

// }


// 5
// Проверка на таблицу умножения
// Пользователь вводит два случайных числа
// После чего вводит еще одно число, которое должно являться произведением 
// первых двух
// Если пользователь ввел правильное произведение вывести собщение что он молодец!
// Если нет, выводим пользователю правильный ответ.

// for(; ;) {

//     let firstMultiplier = prompt('Enter first multiplier', '');
//     let secondMultiplier = prompt('Enter second multiplier', '');
//     let result = prompt('Enter result', '');

//     if(firstMultiplier === null || secondMultiplier === null || result === null) {
//         alert('You do not enter number');
//         break;
//     } 

//     if(firstMultiplier === '' || secondMultiplier === '' || result === '') {
//         alert('You do not enter nothing');
//     } else if (isNaN(firstMultiplier) || isNaN(secondMultiplier) || isNaN(result)) {
//         alert('Enter number!');
//     } else {
//         let sum = firstMultiplier * secondMultiplier;
//         if(sum === +result) {
//             alert('You are right!');
//         } else {
//             alert(`Right result ${sum}`);
//         }
//     }
// }


// 6
// Под диваном живет 100 хомячков.
// Пользователь вводит число хомячков,
// которое он хочет достать из-под дивана.
// Если число оставшихся хомячков меньше
// чем число, которое ввел пользователь
// вывести сообщение.


// let hamsters = 100;


// for (; ;) {

//     let numberOfHamsters = prompt('How many hamster to get?');
    
//     if(numberOfHamsters === null || numberOfHamsters === '' || isNaN(numberOfHamsters)) {
//         alert('Enter number');
//     } else if(numberOfHamsters > hamsters){
//         alert('Not so many hamsters :)');
//         break;
//     } else {
//         hamsters -= numberOfHamsters;
//     }
    
// }



// 7
// Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
// чисел от n до m.
// Например:
// Ввели число 2
// Ввели число 5
// выводим: 2*2 потом 3*3 потом 4*4 потом 5*5


// let oneUserNumber = prompt('Enter number');
// let twoUserNumber = prompt('Enter number');

// for(let i = oneUserNumber; i <= twoUserNumber; i++) {

//     if(oneUserNumber === null || twoUserNumber === null) {
//         alert('You do not enter number');
//     } else if(isNaN(oneUserNumber) || isNaN(twoUserNumber)) {
//         alert('Enter number!');
//     } else if(twoUserNumber <= oneUserNumber) {
//         alert('The second number must be greate than the first!');
//     } else {

//         let result = i * i;
//         alert(`the square of the number ${i} is ${result} `)

//     }

// }


// 8
// Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.

// let userNumber = prompt('Enter number');

// if(userNumber !== null && userNumber !== '' && !isNaN(userNumber)) {
//     for (let i = userNumber; i > 0; i--) {
//         alert(i);
//     }

// } else {
//     alert('Enter number');
// }


// 9
// Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

// let userNumber = 0;

// for (let i = 0; i < 5; i++) {

//     let userNumberNew = prompt('Enter  number');
    
//     if (userNumberNew === null) {
//         alert('Goodbye');
//         break;
//     } else if (userNumberNew === '' || isNaN(userNumberNew)) {
//         alert('It is not a number');
//         i--;
//         continue;
        
//     } 
    
//     userNumberNew = +userNumberNew;

//     if (userNumberNew > userNumber) {
//         userNumber = userNumberNew;
//     } else {
//         alert('Too small number!');
//         break;
//     }

// }


// 10
// Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"

// let word = 'ика';
// let userNumber = prompt('Enter number');


// if (userNumber === null) {
//     alert('goodbye!');
// } else if (userNumber === '' || isNaN(userNumber)) {
//     alert('Enter number!');
// } else {

//     for (let i = 1; i <=  userNumber; i++ ) {
//         word = 'за' + word;       
//     }
    
//     alert(word);
// }



// 2.1
// Пользователь вводит год своего рождения, вывести в консоль инфу сколько пользователю было в разные года до текущего
// например:
// вводим 2003:
// выводим: в 2003 было 1 год
// в 2004 было 2 года
// в 2005 было 3 года
// и тд
// в 2022 было 19


// let userYearOfBirth = +prompt('Enter year of birth', '');
// let userAge = 0;

// for (;userYearOfBirth <= 2022; userYearOfBirth++) {
//     console.log(`In ${userYearOfBirth} the user was ${userAge} year old`);
//     userAge++;
// }