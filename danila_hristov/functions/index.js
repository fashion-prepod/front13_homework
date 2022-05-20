// 1. Написать функцию, которая принимает число дня недели и возвращает
// его название, если введено число больше 7 или меньше 1 вернуть
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели»
// function daysOfWeek (dayOfWeek) {
//     if (dayOfWeek > 7 || dayOfWeek < 1) {
//         return "Нет такого дня недели";
//     } else {
//         switch (dayOfWeek) {
//             case 1:
//                 return "monday";
//                 case 2:
//                 return "tuesday";
//                 case 3:
//                 return "wednesday";
//                 case 4:
//                 return "thursday";
//                 case 5:
//                 return "friday";
//                 case 6:
//                 return "saturday";
//                 case 7:
//                 return "sunday";
//         }
//     }
// }
// console.log(daysOfWeek(2));


// 2. Написать функцию, которая возвращает годовую оценку по предмету.
// Функция принимает 4 оценки за четверти и возвращает годовую. В
// начале программы пользователя спршивают оценки за четверти в
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и
// т.д. В конце работы программы выводится сообщение «ваша годовая
// оценка N».
// function termMark () {
//     let averageMark = 0;
//     for (let i = 1; i <= 4; i++) {
//         averageMark += +prompt(`введите оценку за ${i} четверть`);
//     }
//     let result = Math.round(averageMark/4);
//     return `ваша годовая оценка ${result}`;
// }
// console.log(termMark());


// 3. Напишите функцию, которая возвращает процент побед и процент
// поражений в контру или доту. Функция принимает два параметра:
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы:
// myStats(352,211), это значит было 352 победы и 211 поражений.
// Функция возвращает сообщение «ваш процент побед - 62%,
// поражений – 38%»
// function winLose (wins, loses) {
//     let matches = wins + loses;
//     let procentsMatches = matches / 100;
//     let procentsWins = (wins / procentsMatches).toFixed(1);
//     let procentsLoses = (loses / procentsMatches).toFixed(1); 
//     return `ваш процент побед - ${procentsWins}%, поражений – ${procentsLoses}%`;
// }
// console.log(winLose(345341, 234));
