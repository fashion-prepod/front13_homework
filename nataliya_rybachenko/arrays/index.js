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

// const arr = [];
// for (let i = 0; arr.length < 8; i++) {
//   arr[arr.length] = i ** 2;
// }
// console.log(arr);

// 4.С помощью цикла создать массив, который
// одинаково читается как слева направо, так и справа
// налево (Количество элементов массива: 9)

// const arr = [];
// for (let i = 0; ; ) {
//   if (arr.length < 4) {
//     arr[arr.length] = i++;
//   } else if (arr.length >= 4 && arr.length < 9) {
//     arr[arr.length] = i--;
//   } else {
//     break;
//   }
// }
// console.log(arr);

// 5. Создать массив из 10 чисел. Вывести на экран
// количество четных чисел из этого массива.

// const arr = [4, 44, 6, 99, 5, 3, 65, 2, 1, 67];
// let amount = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     amount++;
//   }
// }
// console.log(amount);

// 6. Создать массив из 10 чисел. Вывести на экран
// наибольшее число из этого массива.

const arr = [4, 102, 6, 99, 5, 3, 600, 2, 1, 67];

for (let i = 0; i < arr.length - 1; ) {
  if (arr[arr.length - 1] > arr[i]) {
    i++;
  } else {
    arr[(arr.length = arr.length - 1)];
  }
}
console.log(arr[arr.length - 1]);
