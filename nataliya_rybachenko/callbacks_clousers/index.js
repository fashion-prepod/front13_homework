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

function funcCounter(number) {
  let counter = number;
  return function () {
    if (number < 100) {
      return console.log(++counter);
    } else {
      return console.log(--counter);
    }
  };
}
const result = funcCounter(1002);
result();
result();
result();
