//*arrays
//!1 part
//*1
// Создать массив из 10ти элементов и вывести на экран сумму всех элементов массива.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for(let i = 0; i<array.length; i++) {
    sum += array[i];
}

console.log(sum);

//*2
// Найти среднее арифметическое значение элементов массива, которые стоят на четных местах.

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum1 = 0;
let count = 0;
for(let i = 0; i < array1.length; i+=2) {
    sum1 += array1[i];
    count++;
}

console.log(sum1/count);

//*3
// Создать массив, элементы которого равны элементам исходного массива, но с противоположными знаками. (Длина исходного массива должна быть не меньше 10ти элементов)

let initialArray = [1, -2, 54, 11, -22, -234, 4442, 121, -11, 3, -34];
let resultArray = [];

for(let i = 0; i<initialArray.length; i++) {
  //resultArray[i] = -initialArr[i];
  let el = -initialArray[i];
  resultArray.push(el)
  
}
console.log(resultArray);
//!2 part
//*1
//Автоматически заполнить массив нулями, кроме первого и последнего элементов, которые должны быть единицами. (Количество элементов массива: 8)

let array3 = [];

for(let i = 0; i<8; i++) {
    (i === 0 || i === 7) ? array3[i] = 1 : array3[i] = 0;
}

console.log(array3);

//*2
// Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля

let array4 = [];

for(let i = 0; i < 10; i++) {
    array4[i] = i % 2 === 0 ? 0 : 1;
}

console.log(array4);

//*3 
//Заполнить массив последовательными нечетными числами начиная с единицы. (Количество элементов массива: 8)

let array5 = [];

let Value = 1;
for(let i = 0; i < 8; i++) {
    array5[i] = Value;
    Value += 2;
}

console.log(array5);

//*4
// Сформировать массив из чисел, которые делятся на 3 (Количество элементов массива: 8)

let array6 = [];
let value = 3;

for(let i = 0; i < 8; i++) {
    array6[i] = value;
    value += 3;
}

console.log(array6);
//!3 part

//*1
// С помощью цикла создать массив, каждый элемент которого равен квадрату своего номера.
let array7 = [];

for(let i = 0; i < 10; i++) {
    array7[i] = i*i;
}

console.log(array7);

//*2 
// С помощью цикла создать массив, который одинаково читается как слева направо, так и справа налево (Количество элементов массива: 9).

let array8 = [];
let num = 1;
for(let i = 0; i<9; i++) {
    array8[i] = num;
    i < 4 ? num++ : num--;
}

console.log(array8);

//*3
//. Создать массив из 10 чисел. Вывести на экран количество четных чисел из этого массива.

let array9 = [2, 3, 4, 5, 6, 77, 8, 22, 11, 12];

let count1 = 0;

for(let i = 0; i<array9.length; i++) {
    if (array9[i] % 2 === 0) count1++  
}

console.log(count1);

//*4
//Создать массив из 10 чисел. Вывести на экран наибольшее число из этого массива.

let array10 = [2, 3, 4, 5, 6, 77, 8, 222, 11, 12];

let maxValue = array10[0];
for(let i = 0; i<array10.length; i++) {
    if(array10[i]>maxValue) maxValue = array10[i];
}

console.log(maxValue);