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
    let arr = [];
    return function (string, boolean) {
        if (boolean === true) {
            arr.push(string);
            return arr.join('');
        } else if (boolean === false) {
            delete arr[arr.indexOf(string)];
            return arr.join('');
        }
    }
}

const className = classNameEditor();


// 4. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.

function checkLogin(login, rightlogin, callback1, callback2) {
    login === rightlogin ? callback1() : callback2()
}
