// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).


// function toggleMe() {
//     let value  = false;
//     return function() {
//         value = !value;
//       return value;
//     };
// };

// let getToggleMe = toggleMe();

// console.log(getToggleMe());
// console.log(getToggleMe());
// console.log(getToggleMe());
// console.log(getToggleMe());

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0

// function funcCounter(call){
//     let i = call;
//     return function(){
//         if (call < 100){
            
//         return ++i;
//         } else if (i === 0){
//             return 0;
//         } else {
//             return --i;
//         }
        

//     }

// }
// let count = funcCounter(101);
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());