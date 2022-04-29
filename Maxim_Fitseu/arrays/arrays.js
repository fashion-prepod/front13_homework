// 1. Создать массив из 10ти элементов и вывести на 
// экран сумму всех элементов массива.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);

// 2. Найти среднее арифметическое значение 
// элементов массива, которые стоят на четных местах.

// const arr = [3, 88, 6, 116, 22, 778, 32, 988];

// let sum = 0;
// let avg = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         sum += arr[i];
//         avg++;
//     }
// }

// console.log(sum / avg);

// 3. Создать массив, элементы которого равны 
// элементам исходного массива, но с 
// противоположными знаками. (Длина исходного 
// массива должна быть не меньше 10ти элементов)

// const arr = [3, -6, 8, -15, 9, -30, 80, -65, 77, -19];

// const reversedArr = [];


// for (let i = 0; i < arr.length; i++) {
//     reversedArr[i] = -arr[i];
// }


// console.log(arr);
// console.log(reversedArr);

// 1. Автоматически заполнить массив нулями, кроме 
// первого и последнего элементов, которые должны 
// быть единицами. (Количество элементов массива: 8)

// const arr = [];

// for (let i = 0; i < 8; i++) {
//     arr[i] = 0;
//     arr[0] = 1;
//     arr[7] = 1;
// }

// console.log(arr);

///// 

// for (let i = 0; arr.length !==  8; i++) {
//     arr[i] = i === 0 || i === 7 ? 1 : 0;
// }


// 2. Заполнить массив нулями и единицами, при этом 
// данные значения чередуются, начиная с нуля.

// const arr = [];
// arr.length = 8;

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = 1;
//     if (i % 2 === 0) {
//         arr[i] = 0;
//     }
// }

// console.log(arr);

// arr[i] = i % 2 === 0 ? 0 : 1;


// 3. Заполнить массив последовательными нечетными 
// числами начиная с единицы. (Количество элементов 
// массива: 8)

// const arr = [];

// for (let i = 0; arr.length !== 8; i++) {
//     if (i % 2 !== 0) {
//         arr[arr.length] = i;
//     }
    
// }

// console.log(arr);

// 4. Сформировать массив из чисел, которые делятся на 
// 3 (Количество элементов массива: 8)

// const arr = [];
// for (let i = 0; arr.length !== 8; i++) {
//     arr[arr.length] = i * 3;
// }
// console.log(arr);

//////////

// 1. С помощью цикла создать массив, каждый элемент 
// которого равен квадрату своего номера.

// const arr = [];

// for (let i = 0; arr.length !== 8; i++) {
//     arr[i] = i**2;
// }
// console.log(arr);

// 2. С помощью цикла создать массив, который 
// одинаково читается как слева направо, так и справа 
// налево (Количество элементов массива: 9).

// const arr = [];
// for (let i = 0; arr.length !== 9; ) {
//     if (arr.length < 4) {
//         arr [arr.length] = i++;
//     } else {
//         arr [arr.length] = i--;
//     }
// }
// console.log(arr)

// 3. Создать массив из 10 чисел. Вывести на экран 
// количество четных чисел из этого массива.

// const arr = [15, 12, 432, 1312, 44, 2311, 34, 55, 19, 778];
// let res = 0;

// for (let i = 0; i < 10; i++) {
//     if (arr[i] % 2 === 0) {
//         res++;
//     }
// }

// console.log(arr);
// console.log(res);


// 4. Создать массив из 10 чисел. Вывести на экран 
// наибольшее число из этого массива

// const arr = [87, 68, -1231, 15, 10, 1, 0, 123, 43, 34];
// let result = arr[0];

//     for (i = 0; i < 10; i++) {
//         if (result < arr[i]) {
//             result = arr[i];
//         }
//     }

// console.log(result);



////// arrays methods

// 1. Дана строка "We love js"
// изменить эту строку "We like very much js"

// let str = 'We love js';
// let result = str.split(' ');
// result.splice(1, 1, 'like', 'very', 'much');
// let resAll = result.join(' ');
// console.log(resAll);


// 2. Даны 2 массива 
// 1. Пользователь вводит имя, если это имя есть в миссиве1 добавить его копиию в массив2
// 2. Пользователь вводит имя, если это имя есть в массиве2 удалить это имя из массива
// 3. Создать новый массив только из тех имён, которые есть в обоих массивах
// 4. Объеденить два массива так, что бы в получившемся массиве не было одинаковых имён

let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
let newArr = [];


let name1 = prompt('Enter your name');
let name2 = prompt('Enter your name');

const res1 = people1.includes(name1);
const res2 = people2.includes(name2);

if (res1 === true) {
    people2.push(name1);
}   
if (res2 === true) {
    const res3 = people2.indexOf(name2);
    people2.splice(res3, 1);
}

for (let i = 0; i < people1.length; i++) {
    for (let j = 0; j < people2.length; j++) {
     if (people1[i] === people2[j]) {
        newArr.push(people1[i]);
     }
    }
}

let newArrConcat = people1.concat(people2);
let newArrConcatName = [];

for (let i = 0; i < newArrConcat.length; i++) {
    if (!newArrConcatName.includes(newArrConcat[i])) {
        newArrConcatName.push(newArrConcat[i]);
    }
}


console.log(people1);
console.log(people2);
console.log(newArr);
console.log(newArrConcatName);

