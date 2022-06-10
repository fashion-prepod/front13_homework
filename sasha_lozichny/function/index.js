// 1. Написать функцию, которая принимает число дня недели и возвращает
// его название, если введено число больше 7 или меньше 1 вернуть
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели»

// let userNumber = prompt("enter your number a day of week");
// userNumber = +userNumber;

// function showDay(dayNumber) {
//   if (userNumber > 7 || userNumber < 1 || isNaN(userNumber)) {
//     return "uncorrect value";
//   }
//   const days = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday",
//   };
//   return days[dayNumber];
// }
// alert(showDay(userNumber));

// 2. Написать функцию, которая возвращает годовую оценку по предмету.
// Функция принимает 4 оценки за четверти и возвращает годовую. В
// начале программы пользователя спршивают оценки за четверти в
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и
// т.д. В конце работы программы выводится сообщение «ваша годовая
// оценка N».

// let gradeOne = +prompt("enter grade for 1st quarter");
// let gradeTwo = +prompt("enter grade for 2nd quarter");
// let gradeThree = +prompt("enter grade for 3rd quarter");
// let gradeFour = +prompt("enter grade for 4th quarter");

// function getYearGrade(first, second, third, fourth) {
//   let yaerGrade = (first + second + third + fourth) / 4;
//   return `Your year grade ${yaerGrade}`;
// }
// alert(getYearGrade(gradeOne, gradeTwo, gradeThree, gradeFour));

// 3. Напишите функцию, которая возвращает процент побед и процент
// поражений в контру или доту. Функция принимает два параметра:
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы:
// myStats(352,211), это значит было 352 победы и 211 поражений.
// Функция возвращает сообщение «ваш процент побед - 62%,
// поражений – 38%»

// let numberOfVictories = +prompt("enter number of victories");
// let numbrOfDefeats = +prompt("enter number of defeats");

// function getResult(firstStat, secondStat) {
//   let sumState = firstStat + secondStat;
//   return `Your win rate ${(firstStat / sumState) * 100}%;
//   Your percentage of losses ${(secondStat / sumState) * 100}%.`;
// }
// alert(getResult(numberOfVictories, numbrOfDefeats));

