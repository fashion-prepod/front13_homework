// Task_1
// С помощью цикла создать массив, каждый элемент
// которого равен квадрату своего номера.

const arr = [];
let sizeArray = 8;
for (i = 0; arr.length !== sizeArray; i++) {
  arr[i] = i * i;
}
alert(arr);
