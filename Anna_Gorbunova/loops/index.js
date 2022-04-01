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