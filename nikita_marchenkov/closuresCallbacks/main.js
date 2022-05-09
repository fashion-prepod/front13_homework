// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

let toggler = () => {
    let result = false;
    return function() {
        result = !result;
        return result;
    };
}
let toggleMe = toggler()

console.log(toggleMe());
console.log(toggleMe());

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 100, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 100, то функция считает
// количество от этого числа до 0

let funcCounter = (number) => {
    let startValue = number;
    if(number < 100) {
        return () => {
            return ++startValue;
        }
    } else {
        return () => {
            if(startValue > 0) return --startValue;
        }
    }
}
let count1 = funcCounter(100);

console.log(count1());
console.log(count1());

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
    let className = "";

    function helper(name, shouldBeDeleted) {
        if(!shouldBeDeleted) {
            className = className + " " + name;
            className = className.trim();
        } else if (shouldBeDeleted) {
            className = className.split(" ");
            className = className.filter(item => item !== name);
            if(className.findIndex(item => item === name) !== -1) return name;
            className = className.join(" ");
        } 
        return className;
    }
    return helper;
}
let someClass = classNameEditor();
console.log(someClass("aaaa", false));
console.log(someClass("aaaa", true));
console.log(someClass("myName", false));
console.log(someClass("myName2", false));

// 4. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.

function checkLogin(userLogin, correctLogin, successCallback, failCallback) {
    if(userLogin === correctLogin) {
        successCallback();
    } else {
        failCallback();
    }
}

// 5. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.

function iterator(array, callback) {
    // return array.map(item => callback(item));

    for(let i = 0; i < array.length; i++) {
        array[i] = callback(array[i]);
    }
    return array;
}

let modificatorFn = (item) => {
    return ++item;
}

console.log(iterator([1, 2, 3, 4], modificatorFn));