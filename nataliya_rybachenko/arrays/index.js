// 1. Создать массив из 10ти элементов и вывести на
// экран сумму всех элементов массива.

const arr = [1, 2, 2, 3, 3, 5, 6, 8, 4, 7];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
