// Task 1 
// const arr = [
//   { a: 2, b: 1 },
//   { a: 5, b: 12 },
//   { a: 95, b: 7 },
//   { a: 51, b: 5 },
// ];
// 1.1 вывести в консоль 'its valid' если во всех оъектах a > b
//  вывести  'its invalid' если хотя бы в одном объекте a <= b

// const isValidArr = arr.every((obj) => obj.a > obj.b);
// console.log(isValidArr ? 'its valid' : 'its invalid');

//1.2 на основе массива arr создать новый массив у объектов которого
//  поле b возведено в квадрат

// const newArr = arr.reduce((acc, obj) => {
//     obj.b **= 2;
//     acc.push(obj);
//     return acc;
// }, [])
// console.log(newArr);

// 1.3 на основе массива arr созать массив где все значения полей
//  a и b помещены как послеовательные значения
//  [2, 1, 5, 12, 95, 7, 51, 5]

// const arrValues = arr.reduce((acc, obj) => {
//   acc.push(obj.a, obj.b);
//   return acc;
// }, []);
// console.log(arrValues);


// Task 2
// Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.

// const numArr = [23, 1, 4, 24, 8, 10, 15, 100, 99, 96, -4, -50];
// const filtredArr = numArr.filter(num => num % 2 === 0 && (Math.abs(num) >= 10 && Math.abs(num) < 100) ? true : false);
// console.log(filtredArr);

// Task 3
// Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

// const arrNames = ['Василий', 'Николай', 'Екатерина', 'Семён', 'Елена'];
// console.log(arrNames.some(name => name === 'Семён'));

// Task 4
// Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

// const arrOfNum = [23, 1, 4, 24, 8, 10, 15, 100, 99, 96, -4, -50];
// const sumOfEvenNum = arrOfNum.reduce((acc, num) => num % 2 === 0 ? acc += num : acc, 0);
// console.log(sumOfEvenNum);

// Task 5
// Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

// let arrOfValues = [];
// for (let i = 1; i <= 10; i++) {
//   arrOfValues.push(prompt(`Введите ${i !== 3 ? i + '-ое' : i + '-ее'} значение из 10`));
// }
// const isArrNum =  arrOfValues.every(item => !isNaN(+item))
// console.log(isArrNum);

