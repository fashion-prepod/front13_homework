// 1. Написать функцию, которая принимает число дня недели и возвращает
// его название, если введено число больше 7 или меньше 1 вернуть
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели»

// const userNum = prompt('enter a number from 1 to 7');
// function dayOfWeek(userNum) {
//     switch (userNum) {
//         case '1': 
//             return 'Monday'
//         case '2': 
//             return 'Tuesday'
//         case '3': 
//             return 'Wednesday'
//         case '4': 
//             return 'Thursday'
//         case '5': 
//             return 'Friday'
//         case '6': 
//             return 'Saturday'
//         case '7': 
//             return 'Sunday'
//         default:
//             return 'No such day of the week'  
//     }
// }
// console.log(dayOfWeek(userNum));

// 2. Написать функцию, которая возвращает годовую оценку по предмету.
// Функция принимает 4 оценки за четверти и возвращает годовую. В
// начале программы пользователя спршивают оценки за четверти в
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и
// т.д. В конце работы программы выводится сообщение «ваша годовая
// оценка N».

// const userValueOne = prompt('Введите оценку за 1 четверть');
// const userValueTwo = prompt('Введите оценку за 2 четверть');
// const userValueThree = prompt('Введите оценку за 3 четверть');
// const userValueFour = prompt('Введите оценку за 4 четверть');
// const getQuarterGrade = function (userValueOne, userValueTwo, userValueThree, userValueFour) {
//     return 'Ваша годовая оценка ' + (+userValueOne + +userValueTwo + +userValueThree + +userValueFour) / 4;
// }
// console.log(getQuarterGrade(userValueOne, userValueTwo, userValueThree, userValueFour));