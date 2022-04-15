'use strict'
// 1. Написать функцию, которая принимает число дня недели и возвращает
// его название, если введено число больше 7 или меньше 1 вернуть
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели»

// let dayNumber = +prompt ('Enter the day of the week','');

//  function dayOfWeek(dayNumber){

//      if (  dayNumber < 1 || dayNumber > 7 ) {
//          return 'Error.No such day of the week';
//      } else if ( dayNumber === 1){
//         return 'Monday';
//      } else if ( dayNumber === 2){
//         return 'Tuesday';
//      } else if ( dayNumber === 3){
//         return 'Wednesday';
//      } else if ( dayNumber === 4){
//         return 'Thursday';
//      } else if ( dayNumber === 5){
//         return 'Friday';
//      } else if ( dayNumber === 6){
//         return 'Saturday';
//      } else if ( dayNumber === 7){
//         return 'Sunday';
//      }

//  }
//  console.log(dayOfWeek(dayNumber));

// 2. Написать функцию, которая возвращает годовую оценку по предмету.
// Функция принимает 4 оценки за четверти и возвращает годовую. В
// начале программы пользователя спршивают оценки за четверти в
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и
// т.д. В конце работы программы выводится сообщение «ваша годовая
// оценка N».

// let firstQuarter = +prompt ('Enter grade for the first quarter','');
// let secondQuarter = +prompt ('Enter grade for the second quarter','');
// let thirdQuarter = +prompt ('Enter grade for the third quarter','');
// let fourthQuarter = +prompt ('Enter grade for the fourth quarter','');

// function finishedMark (firstQuarter, secondQuarter, thirdQuarter, fourthQuarter){
//            let res = Math.round((firstQuarter + secondQuarter + thirdQuarter + fourthQuarter)/4);
//            return `Your grade ${res}`;
// }
// alert(finishedMark (firstQuarter, secondQuarter, thirdQuarter, fourthQuarter));

// 3. Напишите функцию, которая возвращает процент побед и процент
// поражений в контру или доту. Функция принимает два параметра:
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы:
// myStats(352,211), это значит было 352 победы и 211 поражений.
// Функция возвращает сообщение «ваш процент побед - 62%,
// поражений – 38%»

// function  myStats (victory, defeat) {
//     let userVictory =  Math.round(( victory/(victory + defeat))* 100);
//     let userDefeat = Math.round(( defeat/(victory + defeat)) * 100);

//     return ` Your win rate ${userVictory} and Loss Rate ${userDefeat}`;

// }
// alert(myStats (352, 211));
