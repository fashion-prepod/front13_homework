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

// function classNameEditor() {
//   let clas;
//   return function (nameClass, trueOrFalse) {
//     if (trueOrFalse === true) {
//       clas = nameClass;
//       return clas;
//     } else {
//       return "";
//     }
//   };
// }
// let result = classNameEditor();
// console.log(result("imgHeader", true));
// console.log(result("imgHeader", false));
// console.log(result("imgHeader", true));
// console.log(result("imgHeader", false));
// console.log(result("imgHeader", true));
// console.log(result("imgHeader", true));

// 4. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.

// function checkLogin(loginUser, trueLogin, callbackTruLogin, callbackFalseLogin) {
//   let messageLoginUser = +prompt(loginUser);
//   if (messageLoginUser === trueLogin) {
//     callbackTruLogin();
//   } else {
//     callbackFalseLogin();
//   }
// }
// let showMessageTrue = function () {
//   alert("Correct login");
// };
// let showMessageFalse = function () {
//   alert("Invalid login entered");
// };
// checkLogin("Enter your login", 111, showMessageTrue, showMessageFalse);

// 5. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.

function myFunc(arr, callback) {
  callback(arr);
}
let myCallback = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 10);
  }
};
myFunc([1, 2, 3, 4], myCallback);
