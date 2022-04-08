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

let arr = [];
arr.length = 9;
let userNumber = 1;

for (let i = 0, j = arr.length - 1; ; i++, j--, userNumber++) {
   if (i === j) {
      arr[i] = userNumber;
      break;
   }
   arr[i] = userNumber;
   arr[j] = arr[i];
}
console.log(arr);
