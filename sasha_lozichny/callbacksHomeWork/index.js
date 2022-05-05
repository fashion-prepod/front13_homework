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

// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

// function classNameEditor() {
//   const arr = [];
//   return function (stringValue, isAdd) {
//     if (isAdd) {
//       const isValue = arr.find((item) => item === stringValue);
//       if (!isValue) {
//         arr.push(stringValue);
//       }
//       return arr;
//     } else {
//       const indexElement = arr.indexOf(stringValue);
//       if (indexElement !== -1) {
//         arr.splice(indexElement, 1);
//       }
//       return arr;
//     }
//   };
// }
// const className = classNameEditor();
// console.log(className("Pasha", true));
// console.log(className("Kolya", true));
// console.log(className("Vanya", true));
// console.log(className("Pasha", false));

// 4. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.

// const correctLogin = "Valerchik1986";
// function checkLogin(login, correctLogin, callbackCorrectValue, callbackWrongValue) {
//   if (login === correctLogin) {
//     callbackCorrectValue();
//   } else {
//     callbackWrongValue();
//   }
// }
// function callbackCorrectValue() {
//   return console.log("login correct");
// }
// function callbackWrongValue() {
//   return console.log("login uncorrect");
// }
// checkLogin("Valerchik1986", "Valerchik1986", callbackCorrectValue, callbackWrongValue);

