// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

// function toggler() {
//     let bool = true;
//     return function() {
//         return bool = !bool;
//     }
// }

// const toogleMe = toggler();
// console.log(toogleMe());
// console.log(toogleMe());
// console.log(toogleMe());


// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0

// function countCreator(callback) {
//     let count = callback;
//     return function counter() {
//         if (callback < 100) {
//             return ++count;
//         } else {
//             return count !== 0 ? --count : count;
//         }
//     } 
// }

// const funcCounter = countCreator(101);

// console.log(funcCounter());
// console.log(funcCounter());
// console.log(funcCounter());


// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

// function changeClass() {
//     let className = '';
//     return (newClassName, bool) => {
//         if (bool) {
//             return className += newClassName + ' ';
//         } else {
//             return className.replace(newClassName + ' ', '')
//         } 
//     }  
// }
// const classNameEditor = changeClass();

// console.log(classNameEditor('btn', true));
// console.log(classNameEditor('btn_blue', true));
// console.log(classNameEditor('btn_small', true));
// console.log(classNameEditor('btn_blue', false));
// console.log(classNameEditor('btn_blue', false));


// 4. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.


// function checkLogin(login, registeredLogin, callback1, callback2) {
//     if (login === registeredLogin) {
//         callback1();
//     } else {
//         callback2();
//     }
// }
// function correctLogin() {
//     console.log('Welcome');
// }
// function invalidLogin() {
//     console.log('Enter corret login');
// }
// checkLogin('istep', 'istep', correctLogin, invalidLogin);


// 5. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.

// function someFunc(arr, callback) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]))
//     }
//     return result;
// }
// function exp(num) {
//     return num * num;
// }
// console.log(someFunc([1, 2, 3, 23, 6], exp));


