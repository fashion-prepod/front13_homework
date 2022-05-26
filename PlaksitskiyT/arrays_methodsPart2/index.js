const arr = [
  { a: 2, b: 1 },
  { a: 9, b: 12 },
  { a: 95, b: 7 },
  { a: 51, b: 5 },
];

//  1.1 вывести в консоль 'its valid' если во всех оъектах a > b
//  вывести  'its invalid' если хотя бы в одном объекте a <= b

// let res = arr.every((items) => 
//   items.a > items.b);
//   console.log ( res ? 'its valid' : 'its invalid');



//  1.2 на основе массива arr создать новый массив у объектов которого
//  поле b возведено в квадрат

// let res = arr.map((items) => {
//   return {
//      a: items.a,
//      b: items.b**2,
//   };
// });
// console.log(res);

//  1.3 на основе массива arr созать массив где все значения полей
//  a и b помещены как послеовательные значения
//  [2, 1, 5, 12, 95, 7, 51, 5]

let arrOne = arr.reduce((acc, items) => {}, []);

console.log(arrOne);

// 2. Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.

// let arr = [2, 1, 8, 12, 95, 7, 54, 5];
// let res = arr.filter((item) => item % 2 === 0 && (item > 10  && item < 98));
// console.log(res);

// 3. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

// let arr = [ 'kolia', 'fedya', 'anton', '«Семён»'];
//  let res = arr.some((item) => item === '«Семён»');
//  console.log(res);

// 4. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

// let arr = [2, 1, 5, 12, 95, 7, 51, 5];
// let res = arr.reduce((acc, item) => item % 2 === 0 ? acc += item : acc, 0);
// console.log(res);


// 5. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

// let arr = [];
// for ( let i = 0; arr.length < 10; i++){
//   let userNum = prompt('Enter number');
//   arr.push(userNum);
// };
//  let tasks = arr.every((item) => !isNaN(item));
//  console.log(arr);
//  console.log(tasks);