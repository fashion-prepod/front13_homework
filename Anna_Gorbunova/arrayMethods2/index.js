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
