// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

// const toggle = () => {
//     let result = true;
//         return function() {
//             result = !result;
//             return result;
//         };
// } 

// const toggleMe = toggle();

// console.log(toggleMe());
// console.log(toggleMe());
// console.log(toggleMe());
// console.log(toggleMe());



// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0


// function funcCounter(callback) {
//     let count = callback;
//     return function counter() {
//         if (callback < 100) {
//             return ++count;
//         } else {
//             return count !== 0 ? --count : count;
//         }
//     } 
// }

// const countTwo = funcCreator(100);

// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

// 4. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.


// function checkLogin(userLogin, correctLogin, correctCallback, incorrectCallback) {
//     if(userLogin === correctLogin) {
//         correctCallback();
//     } else {
//         incorrectCallback();
//     }
// }

// function correctLogin() {
//     console.log('You are welcome');
// }
// function invalidLogin() {
//     console.log('Incorrect data');
// }

// checkLogin('123', '123', correctLogin, invalidLogin);

// 5. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.