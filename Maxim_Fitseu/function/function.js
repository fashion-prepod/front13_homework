// 1. Написать функцию, которая принимает число дня недели и возвращает
// его название, если введено число больше 7 или меньше 1 вернуть
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели»

// let number = prompt('enter day of week');

// function dayOfWeek(number) {      
//     if (number > 7 || number < 1) {
//         return "Нет такого дня недели"
//     } else {
//         let day = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
//         return day[number - 1]
//     }
// }

// console.log(dayOfWeek(number));

// 2. Написать функцию, которая возвращает годовую оценку по предмету.
// Функция принимает 4 оценки за четверти и возвращает годовую. В
// начале программы пользователя спршивают оценки за четверти в
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и
// т.д. В конце работы программы выводится сообщение «ваша годовая
// оценка N».

// function result() {
//     let sum = 0;
//     let amount = 0;
//     for (let i = 1; i <= 4; i++) {
//         sum += +prompt(`enter your mark for the ${i} qurter`)
//         amount++;
//     }
//     let resultMark = Math.round(sum / amount);
//     return `your avg mark ${resultMark}`;  
// }

// console.log(result());

// 3. Напишите функцию, которая возвращает процент побед и процент
// поражений в контру или доту. Функция принимает два параметра:
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы:
// myStats(352,211), это значит было 352 победы и 211 поражений.
// Функция возвращает сообщение «ваш процент побед - 62%,
// поражений – 38%»

let userWins = +prompt('enter your wins');
let userLoses = +prompt('enter your loses');

function winRateDota(wins, loses) {
    let allGames = wins + loses;
    let winPercent = (wins / allGames * 100).toFixed(1);
    let losesPercent = (loses / allGames * 100).toFixed(1);
    return `Your percent of wins: ${winPercent} and loses: ${losesPercent}`;
}

console.log(winRateDota(userWins, userLoses));