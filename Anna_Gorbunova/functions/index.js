// 1. 
// Написать функцию, которая принимает число дня недели и возвращает
// его название, если введено число больше 7 или меньше 1 вернуть
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели»

// let userNumber = +prompt('Введите число дня недели');

// function getDayOfWeek (userNumber) {
//     if (userNumber < 1 || userNumber > 7) {
//         return 'Нет такого дня недели';
//     } else if (userNumber === 1) {
//         return 'понедельник';
//     } else if (userNumber === 2) {
//         return 'вторник';
//     } else if (userNumber === 3) {
//         return 'среда';
//     } else if (userNumber === 4) {
//         return 'четверг';
//     } else if (userNumber === 5) {
//         return 'пятница';
//     } else if (userNumber === 6) {
//         return 'суббота';
//     } else if (userNumber === 7) {
//         return 'воскресенье';
//     }
// }

// let dayOfWeek = getDayOfWeek(userNumber);
// console.log(dayOfWeek);


// 2. 
// Написать функцию, которая возвращает годовую оценку по предмету.
// Функция принимает 4 оценки за четверти и возвращает годовую. В
// начале программы пользователя спрашивают оценки за четверти в
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и
// т.д. В конце работы программы выводится сообщение «ваша годовая
// оценка N».


// let firstGrade = +prompt('введите оценку за 1 четверть');
// let secondGrade = +prompt('введите оценку за 2 четверть');
// let thirdGrade = +prompt('введите оценку за 3 четверть');
// let fourthGrade = +prompt('введите оценку за 4 четверть');

// function getGrade (firstGrade, secondGrade, thirdGrade, fourthGrade) {
//     const result = (firstGrade + secondGrade + thirdGrade + fourthGrade) / 4;
//     return result;
// }

// let grade = getGrade(firstGrade, secondGrade, thirdGrade, fourthGrade);
// alert(`ваша годовая оценка ${Math.round(grade)}`);