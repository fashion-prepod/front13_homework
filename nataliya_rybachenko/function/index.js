// 1. Написать функцию, которая принимает число дня недели и возвращает
// его название, если введено число больше 7 или меньше 1 вернуть
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели»

let numberDay = prompt("Enter the number of the day of the week");
numberDay = +numberDay;
const arr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье",];
function dayOfWeek(numberDay) {
  if (numberDay <= arr.length && numberDay >= 1) {
    return arr[numberDay - 1];
  } else {
    return "Нет такого дня недели";
  }
}
alert(dayOfWeek(numberDay));
