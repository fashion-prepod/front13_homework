//2.4 Сформировать массив из чисел, которые делятся на 3 (Количество элементов массива: 8)

// let arr = [];

// for (let i = 0; arr.length !== 8; i++) {
//    if (i % 3 === 0) {
//       arr[arr.length] = i;
//    }
// }
// console.log(arr);


// 3.1 С помощью цикла создать массив, каждый элемент которого равен квадрату своего номера.

// let arr = [];

// for (let i = 0; arr.length !== 8; i++) {
//    arr[i] = i ** 2;
// }
// console.log(arr);


// 3.2 С помощью цикла создать массив, который одинаково читается как слева направо, так и справа налево (Количество элементов массива: 9).

// let arr = [];
// arr.length = 9;
// let userNumber = 1;

// for (let i = 0, j = arr.length - 1; ; i++, j--, userNumber++) {
//    if (i === j) {
//       arr[i] = userNumber;
//       break;
//    }
//    arr[i] = userNumber;
//    arr[j] = arr[i];
// }
// console.log(arr);


// 3.3 Создать массив из 10 чисел. Вывести на экран количество четных чисел из этого массива.

// let arr = [];
// let countOfEven = 0;

// for (let i = 0; arr.length != 10; i++) {
//    arr[arr.length] = i;
//    if (i % 2 === 0) {
//       countOfEven++;
//    }
// }
// console.log(arr);
// console.log(`count of even numbers = ${countOfEven}`);


// 3.4 Создать массив из 10 чисел. Вывести на экран наибольшее число из этого массива.

// let arr = [2, 43, 23, 5, 10, 48, 36, 17, 29, 12];
// let maxValue = arr[0];

// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] > maxValue) {
//       maxValue = arr[i];
//    }
// }
// console.log(maxValue);


// 4.1 Дана строка "Мы любим javascript"
// изменить эту строку на "Мы ОБОЖАЕМ javascript"

// let userString = "Мы любим Javascript";
// let arr = userString.split(' ');
// arr.splice(1, 1, "ОБОЖАЕМ");
// console.log(arr);


// 4.2 Даны два массива
// 1. Пользователь вводит имя, если это имя есть в массиве1 добавьте его копию в массив2
// 2. Пользователь вводит имя, если это имя есть в массиве2 удалите это имя из массива
// 3. Создайте новый массив только из тех имен, которые есть в обоих массивах
// 4. Объедините два массива так, чтобы в получившемся массиве не было одинаковых имен

let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
let userName = prompt('enter name');

for (let i = 0; i < people1.length - 1; i++) {
   if (userName === people1[i]) {
      people2.push(people1[i]);
   }
}
console.log(people1);
console.log(people2);