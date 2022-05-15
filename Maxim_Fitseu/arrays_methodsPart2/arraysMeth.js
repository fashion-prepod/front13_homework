//   const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 },
//     { a: 51, b: 5 },
//   ];
  
// //    1.1 вывести в консоль 'its valid' если во всех оъектах a > b
// //    вывести  'its invalid' если хотя бы в одном объекте a <= b

// const res = arr.every((item) => item.a > item.b);
// if (res === true) {
//     console.log('its valid');
// } else { console.log('its invalid') };

// //    1.2 на основе массива arr создать новый массив у объектов которого
// //    поле b возведено в квадрат


// // const newArr = arr.map(({ a, b }) => ({ a, b: b ** 2 }));
// // console.log(newArr);

// //    1.3 на основе массива arr созать массив где все значения полей
// //    a и b помещены как последовательные значения
// //    [2, 1, 5, 12, 95, 7, 51, 5]

// let newArr = arr.reduce((acc, item) => {
//     return [...acc, item.a, item.b];
// }, []);
// console.log(newArr)

//   2. Дан случайный массив чисел. С помощью метода .filter()
//   отфильтруйте массив так, чтобы в новый массив вошли
//   только четные двухзначные числа из исходного.

// const arr = [21, 10, 130, 52, 66, 78, 8, 92, 123, 2131];
// let filter = arr.filter((item) => (item % 2 === 0 && item >= 10 && item < 100));
// console.log(filter); 

//   3. Дан случайный массив имен. Выяснить есть ли в этом
//   массиве «Семён» с помощью метода .some().

// const arr = ['Fedor', 'Viktor', 'Valerhick', 'Maksim', 'Semen'];

// const find = arr.some((name) => name === 'Semen');

// console.log(find); 

//   4. Дан массив случайных чисел. С помощью метода
//   .reduce() просуммировать только четные числа из этого
//   массива.

// const arr = [12, 80, 13, 25, 66];

// const res = arr.reduce((sum, item) => {
//     if (item % 2 === 0) {
//         return sum + item
//     } else {
//         return sum + 0
//     }
// }, 0);

// console.log(res); 

//   5. Пользователь вводит 10 случайных значений. Каждое
//   значение необходимо записать в массив. С помощью
//   метода .every() проверить были ли все введенные
//   пользователем данные – числами.

function userNumbers() {
    let arr = [];
    for (i = 0; i < 10; i++) {
        let number = prompt('Enter a number');
        arr.push(number);

    }
    return arr;
};

const newArr = userNumbers();

const res = newArr.every((item) => {
    return item !== null && !isNaN(item) && item !== '';
});

console.log(res);