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

