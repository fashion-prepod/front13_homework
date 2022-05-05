// // 1. Создать функцию «переключатель» toggleMe(),
// // которая при вызове чередует возвращаемые булевы
// // значения (true, false).

// function showBooleanValue() {
//   let valueBoolean = false;
//   return () => {
//     valueBoolean = !valueBoolean;
//     return valueBoolean;
//   };
// }
// const toggleMe = showBooleanValue();
// console.log(toggleMe());
// console.log(toggleMe());

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0

// function funcCounter(number) {
//   let countValue = number;
//   return function () {
//     if (number < 100) {
//       return ++countValue;
//     } else if (number > 99) {
//       return --countValue;
//     }
//   };
// }
// const counterFunc = funcCounter(100);
// console.log(counterFunc());
// console.log(counterFunc());
// console.log(counterFunc());



