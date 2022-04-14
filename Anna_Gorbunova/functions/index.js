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


// 3. 
// Напишите функцию, которая возвращает процент побед и процент
// поражений в контру или доту. Функция принимает два параметра:
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы:
// myStats(352,211), это значит было 352 победы и 211 поражений.
// Функция возвращает сообщение «ваш процент побед - 62%,
// поражений – 38%»

// let victories = +prompt('Enter the number of wins');
// let defeats = +prompt('Enter the number of defeats');

// function showMyStats (victories, defeats) {
//     let totalPlayed = victories + defeats;
//     let percentageOfWins = victories / totalPlayed  * 100;
//     let percentageOfDefeats = defeats / totalPlayed * 100;
//     return `Your percentage of wins is ${Math.round(percentageOfWins)}%, and percentage of defeats is ${Math.round(percentageOfDefeats)}%`;
// }

// alert(showMyStats(victories, defeats));