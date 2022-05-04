// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

function toogleMe() {
    let boolean = true;
    return function () {
        boolean = !boolean;
        return boolean;
    }
}
const result = toogleMe();
console.log(result());
console.log(result());
console.log(result());


// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0

function countCreator(number) {
    if (number < 100) {
        let counter = number;
        return function count() {
            return counter++;
        }
    } else {
        let counter = number;
        return function count() {
            return counter--;
        }
    }
}
const result = countCreator(9);
console.log(result());
console.log(result());
console.log(result());