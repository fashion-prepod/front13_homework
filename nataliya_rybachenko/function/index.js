// 1. Написать функцию, которая принимает число дня недели и возвращает
// его название, если введено число больше 7 или меньше 1 вернуть
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели»

// let numberDay = prompt("Enter the number of the day of the week");
// numberDay = +numberDay;
// const arr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье",];
// function dayOfWeek(numberDay) {
//   if (numberDay <= arr.length && numberDay >= 1) {
//     return arr[numberDay - 1];
//   } else {
//     return "Нет такого дня недели";
//   }
// }
// alert(dayOfWeek(numberDay));

// 2. Написать функцию, которая возвращает годовую оценку по предмету.
// Функция принимает 4 оценки за четверти и возвращает годовую. В
// начале программы пользователя спршивают оценки за четверти в
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и
// т.д. В конце работы программы выводится сообщение «ваша годовая
// оценка N».

let result1 = prompt("Введите оценку за 1 четверть");
let result2 = prompt("Введите оценку за 2 четверть");
let result3 = prompt("Введите оценку за 3 четверть");
let result4 = prompt("Введите оценку за 4 четверть");
result1 = +result1;
result2 = +result2;
result3 = +result3;
result4 = +result4;
function yearResult(result1, result2, result3, result4) {
  let totalResult = (result1 + result2 + result3 + result4) / 4;
  return Math.round(totalResult);
}
alert(`Ваша годовая оценка ${yearResult(result1, result2, result3, result4)}`);
