// 1.1 
// вывести в консоль 'its valid' если во всех объектах a > b
// вывести  'its invalid' если хотя бы в одном объекте a <= b

// const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 },
//     { a: 51, b: 5 },
// ];

// const res = arr.every((item) => {
//     return item.a > item.b;
// })
// console.log(res ? 'it\'s valid' : 'it\'s invalid');


// 1.2 
// на основе массива arr создать новый массив у объектов которого
// поле b возведено в квадрат

// const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 },
//     { a: 51, b: 5 },
// ];

// const newArr = arr.map((item) => {
//     return {
//         a: item.a,
//         b: item.b ** 2
//     };
// })
// console.log(newArr);


// 1.3 
// на основе массива arr создать массив где все значения полей
// a и b помещены как последовательные значения
// [2, 1, 5, 12, 95, 7, 51, 5]

// const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 },
//     { a: 51, b: 5 },
// ];

// const newArr = arr.reduce((acc, item) => {
//     acc.push(item.a);
//     acc.push(item.b);
//     return acc;
    
// }, [])

// console.log(newArr);


// 2.
// Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.

// const arrayNumbers = [5, 46, 8, 12, 9, 22, 18, 7, 77, 30];
// let arrayEvenNumbers = arrayNumbers.filter((item) => {
//     return item > 9 && item % 2 === 0;
// })
// console.log(arrayEvenNumbers);


// 3. 
// Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

// const arrayNames = ['Сергей', 'Анастасия', 'Евгений', 'Семён', 'Ольга', 'Иван', 'Александр', 'Ксения', 'Денис', 'Мария'];
// const isSemion = arrayNames.some((item) => {
//    return item === 'Семён';
// })
// console.log(isSemion);


// 4. 
// Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

// const arrayNumbers = [5, 46, 8, 12, 9, 3, 18, 7, 77, 30];

// let sumEventNumbers = arrayNumbers.reduce((acc, item) => {
//     if (item % 2 === 0) {
//         return acc + item;
//     } else {
//         return acc;
//     }
// }, 0)
// console.log(sumEventNumbers);


// 5.
// Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

// let userRandomValue;
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     userRandomValue = prompt('Enter anything');
//     if (userRandomValue === null) {
//         alert('the end')
//         break;
//     } else {
//         arr.push(userRandomValue);    
//     }
// }
// console.log(arr);

// const isNumber = arr.every((item) => {
//     if (item === '') {
//         return false;
//     } 
//     return !isNaN(Number(item) );

// })
// console.log(isNumber);


