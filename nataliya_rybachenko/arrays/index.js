// 1. Создать массив из 10ти элементов и вывести на
// экран сумму всех элементов массива.

// const arr = [1, 2, 2, 3, 3, 5, 6, 8, 4, 7];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// 2. Сформировать массив из чисел, которые делятся на
// 3 (Количество элементов массива: 8)

// const arr = [];
// for (let i = 0; arr.length < 8; i++) {
//   if (i % 3 === 0) {
//     arr[arr.length] = i;
//   }
// }
// console.log(arr);

// 3.С помощью цикла создать массив, каждый элемент
// которого равен квадрату своего номера.

const arr = [];
for (let i = 0; arr.length < 8; i++) {
  arr[arr.length] = i ** 2;
}
console.log(arr);
