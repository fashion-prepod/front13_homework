// 1. const arr = [
//   { a: 2, b: 1 },
//   { a: 5, b: 12 },
//   { a: 95, b: 7 },
//   { a: 51, b: 5 },
// ];

//  1.1 вывести в консоль 'its valid' если во всех оъектах a > b
//  вывести  'its invalid' если хотя бы в одном объекте a <= b
//  1.2 на основе массива arr создать новый массив у объектов которого
//  поле b возведено в квадрат
//  1.3 на основе массива arr созать массив где все значения полей
//  a и b помещены как послеовательные значения
//  [2, 1, 5, 12, 95, 7, 51, 5]

// 2. Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.
// 3. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().
// 4. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.
// 5. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

let arr = [];
for ( let i = 0; arr.length < 10; i++){
  let userNum = prompt('Enter number');
  arr.push(userNum);
};
 let tasks = arr.every((item) => !isNaN(item));
 console.log(arr);
 console.log(tasks);