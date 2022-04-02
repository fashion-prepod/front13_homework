//*arrays
//!1 part
//*1
// Создать массив из 10ти элементов и вывести на экран сумму всех элементов массива.

let arrayOfTenNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for(let i = 0; i<arrayOfTenNums.length; i++) {
    sum += arrayOfTenNums[i];
}

console.log(sum);

//*2
// Найти среднее арифметическое значение элементов массива, которые стоят на четных местах.

let arrayForAverageNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum1 = 0;
let count = 0;
for(let i = 0; i < arrayForAverageNum.length; i+=2) {
    sum1 += arrayForAverageNum[i];
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

let arrayOfZerosAndOnes = [];

for(let i = 0; i<8; i++) {
    (i === 0 || i === 7) ? arrayOfZerosAndOnes[i] = 1 : arrayOfZerosAndOnes[i] = 0;
}

console.log(arrayOfZerosAndOnes);

//*2
// Заполнить массив нулями и единицами, при этом данные значения чередуются, начиная с нуля

let zerosAndOnes = [];

for(let i = 0; i < 10; i++) {
    zerosAndOnes[i] = i % 2 === 0 ? 0 : 1;
}

console.log(zerosAndOnes);

//*3 
//Заполнить массив последовательными нечетными числами начиная с единицы. (Количество элементов массива: 8)

let arrayOfOdds = [];

let Value = 1;
for(let i = 0; i < 8; i++) {
    arrayOfOdds[i] = Value;
    Value += 2;
}

console.log(arrayOfOdds);

//*4
// Сформировать массив из чисел, которые делятся на 3 (Количество элементов массива: 8)

let arrayOfDividedByThree = [];
let value = 3;

for(let i = 0; i < 8; i++) {
    arrayOfDividedByThree[i] = value;
    value += 3;
}

console.log(arrayOfDividedByThree);
//!3 part

//*1
// С помощью цикла создать массив, каждый элемент которого равен квадрату своего номера.
let arrayOfSquares = [];

for(let i = 0; i < 10; i++) {
    arrayOfSquares[i] = i**2;    
}

console.log(arrayOfSquares);

//*2 
// С помощью цикла создать массив, который одинаково читается как слева направо, так и справа налево (Количество элементов массива: 9).

let mirrorArray = [];
let num = 1;
for(let i = 0; i<9; i++) {
    mirrorArray[i] = num;
    i < 4 ? num++ : num--;
}

console.log(mirrorArray);

//*3
//. Создать массив из 10 чисел. Вывести на экран количество четных чисел из этого массива.

let arrayForTenNums = [2, 3, 4, 5, 6, 77, 8, 22, 11, 12];

let countOfEven = 0;

for(let i = 0; i<arrayForTenNums.length; i++) {
    if (arrayForTenNums[i] % 2 === 0) countOfEven++  
}

console.log(countOfEven);

//*4
//Создать массив из 10 чисел. Вывести на экран наибольшее число из этого массива.

let arrayOfNums = [2, 3, 4, 5, 6, 77, 8, 222, 11, 12];

let maxValue = arrayOfNums[0];
for(let i = 0; i<arrayOfNums.length; i++) {
    if(arrayOfNums[i]>maxValue) maxValue = arrayOfNums[i];
}

console.log(maxValue);