// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

// function toggleMe() {
//   let value = true;
//   return function () {
//     if (value === true) {
//       console.log(false);
//       value = false;
//     } else {
//       console.log(true);
//       value = true;
//     }
//   };
// }
// const result = toggleMe();

// result();
// result();
// result();
// result();

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0

// function funcCounter(number) {
//   let counter = number;
//   return function () {
//     if (number < 100) {
//       return console.log(++counter);
//     } else {
//       return console.log(--counter);
//     }
//   };
// }
// const result = funcCounter(1002);
// result();
// result();
// result();

// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

function classNameEditor() {
  let clas;
  return function (nameClass, trueOrFalse) {
    if (trueOrFalse === true) {
      clas = nameClass;
      return clas;
    } else {
      return "";
    }
  };
}
let result = classNameEditor();
console.log(result("imgHeader", true));
console.log(result("imgHeader", false));
console.log(result("imgHeader", true));
console.log(result("imgHeader", false));
console.log(result("imgHeader", true));
console.log(result("imgHeader", true));
