console.log("Hello");







// 4. Пользователь вводит число n, вывести на экран все четные числа от 1 до n

//*1
// Пользователь вводит год своего рождения
// вывести в консоль инфу сколько пользователю было в разные года до текущего
// например: 
// вводим 2003:
// выводим: в 2003 было 1 год
// в 2004 было 2 год
// в 2005 было 3 год 
// и тд
// в 2022 было 19 год
let age = +prompt("Введите ваш год рождения");
let currentAge = 0;
for (let i = age; i <= 2022; i++) {
    console.log("В " + i + " было " + currentAge);
    currentAge++;
}

//*2
// Пользователь вводит свой возраст. Вывести в консоль 
// сколько лет юудет пользователю каждый год до 2030
// например вводим 14:
// выводим:
// в 2023 будет 15
// в 2024 будет 16
// и тд
// в 2030 будет 22
let age2 = +prompt("Введите ваш возраст");

for (let i = 2022; i <= 2030; i++) {
    console.log("В " + i + " будет " + age);
    age2++;
}

//*3
// Пользователя спрашивают пароль
// если пароль введен неправильно, спрашивать еще раз
// если правильно вывести "добро пожаловать"
// если отмена вывести "вход отменен"
let password = prompt("Придумайте пароль");
let answer;
for (let i = 0; ; i++) {
    answer = prompt("Введте ваш пароль");
    if (answer === password) {
        alert("Добро пожаловать");
        break;
    } else if (answer === null) {
        alert("Вход отменен");
        break;
    }
    alert("Неверный пароль")
}

//*4

let n = prompt("Введите ваше число");

for (let i = 2; i <= n; i += 2) {
    console.log(i);
}

//Прошлое дз

//*1

//Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
//Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).

let userNumber = +prompt("Enter a number");
if (userNumber !== null && !isNaN(userNumber) && userNumber > 1) {
    let sum = 0
    for (let i = 1; i < userNumber; i++) {
        sum = sum + i;
    }
    alert("Sum from 1 to " + userNumber + " = " + sum)

} else {
    console.log("Wrong type");
}

//Ещё вариант :)
function superSum(n, sum) {
    if (n >= 1) {
        sum = sum + n;
        n = n - 1;
        return superSum(n, sum)
    } else {
        return sum;
    }
}

console.log(SuperSum(7, 0));

//*2

//Написать программу, которая определяет количество
//положительных, отрицательных чисел и нулей. В
//начале программы, пользователь самостоятельно
//задает какое количество чисел будет вводить, затем
//вводит сами числа.
//Пример вывода:
//«Положительных: 2 шт.
//Отрицательных: 5 шт.
//Нулей: 3 шт.»

let numbersCount = +prompt("Введите количство вводимых чисел");

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

if (numbersCount !== null && !isNaN(numbersCount) && numbersCount > 0) {
    for (let i = 1; i <= numbersCount; i++) {
        let currentNumber = +prompt("Введите свое " + i + " число");
        if (currentNumber > 0) positiveCount++;
        if (currentNumber === 0) zeroCount++;
        if (currentNumber < 0) negativeCount++;
    }
}

alert("Положительных: " + positiveCount + " Отрицательных: " + negativeCount + " Нулей: " + zeroCount);

//*3

//Написать программу, которая выводит на экран
//двузначные числа, которые делятся на 4, но не
//делятся на 6.

for (let i = 10; i < 100; i++) {
    if (i % 4 === 0 && i % 6 !== 0) {
        console.log(i);
    }
}

//*4

//Написать программу, которая выводит среднее
//арифметическое n чисел введенных пользователем.
//Ввод чисел прекращается
//тогда, когда нажали «отмена», после чего выводится
//среднее арифметическое.
let num = 0;
let sum = 0;
for (let i = 0; ; i++) {
    let currentNumber = prompt("Введите ваше число");
    if (currentNumber === null || isNaN(currentNumber) || currentNumber < 0 || currentNumber == undefined) {
        break;
    }
    num++;
    sum += +currentNumber;
}
let result = sum / num;
alert("Среднее арифметическое = " + result);

//*6

//Под диваном живет 100 хомячков.
//Пользователь вводит число хомячков,
//которое он хочет достать из-под дивана.
//Если число оставшихся хомячков меньше
//чем число, которое ввел пользователь
//вывести сообщение.

let allHamsters = 100;
for (let i = 0; ; i++) {
    let countOfHamsters = +prompt("Введите кол-во хомячков");
    if (countOfHamsters < allHamsters) {
        allHamsters = allHamsters - countOfHamsters;
    } else if (countOfHamsters === allHamsters) {
        alert("Вы достали всех хомячков!");
        break;
    } else {
        alert("Слишком много!!!")
    }
}


//*7

//Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
//чисел от n до m.
//Например:
//Ввели число 2
//Ввели число 5
//выводим: 2*2 потом 3*3 потом 4*4 потом 5*5

let firstNum = +prompt("Введите первое число");
let secondNum = +prompt("Введите второе число");

for (let i = firstNum; i <= secondNum; i++) {
    console.log(i * i);
}

//*8

// Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0;
let num1 = +prompt("Введите ваше число");
if (num1 !== null && num1 > 0 && !isNaN(num1)) {
    for (let i = num1; i >= 0; i--) {
        console.log(i);
    }
}

//*9

//Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
//каждое последующее число должно быть больше предыдущего, иначе вывести
//ошибку.

let number;
let prevNumber;
for (let i = 0; i < 5; i++) {
    prevNumber = number;
    number = +prompt("Введите число");
    if (number < prevNumber) {
        alert("Ошибка")
        break;
    }
}

//*10

//Написать программу-заику. Пользователь вводит число. Вывести количество "за"
//(в слове "заика") равное этому числу.
//Например:
//Вводим 3
//Программа выводит "зазазаика"
//Вводим 5
//Программа выводит "зазазазазаика"

let count = +prompt("Введите количество 'за'")

let strResult = "";

for (let i = 0; i < count; i++) {
    strResult = strResult + "за";
}

alert("Ваш результат: " + strResult + "ика");