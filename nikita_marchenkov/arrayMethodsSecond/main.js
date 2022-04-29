
const arr = [
    { a: 2, b: 1 },
    { a: 5, b: 12 },
    { a: 95, b: 7 },
    { a: 51, b: 5 },
];
  
//    1.1 вывести в консоль 'its valid' если во всех оъектах a > b
//    вывести  'its invalid' если хотя бы в одном объекте a <= b

if(arr.every((obj) => obj.a > obj.b)) {
    console.log("its valid");
} else {
    console.log("its invalid");
}

//    1.2 на основе массива arr создать новый массив у объектов которого

//    поле b возведено в квадрат
let sqaredArr = arr.map(obj => {
    return {
        ...obj,
        b: obj.b**2
    }
})
console.log(sqaredArr);

//    1.3 на основе массива arr созать массив где все значения полей
//    a и b помещены как послеовательные значения
//    [2, 1, 5, 12, 95, 7, 51, 5]


let result = [];

let simpleArr = arr.map(obj => [obj.a, obj.b]).forEach((arr) => result.push(...arr));

console.log(result);

//   2. Дан случайный массив чисел. С помощью метода .filter()
//   отфильтруйте массив так, чтобы в новый массив вошли
//   только четные двухзначные числа из исходного.

let testArr = [1, 33, 22, 324, 44, 53, 62, 555, 0, 32];

let filteredArr = testArr.filter(num => num % 2 === 0 && num > 9 && num < 100);

console.log(filteredArr);

//   3. Дан случайный массив имен. Выяснить есть ли в этом
//   массиве «Семён» с помощью метода .some().

let names = ["Борис", "Сергей", "Семён"];

let semen = names.some((name) => {if(name === "Семён") return true});

console.log(semen);

//   4. Дан массив случайных чисел. С помощью метода
//   .reduce() просуммировать только четные числа из этого
//   массива.

let numbers = [1, 2, 3, 4, 44, 23, 30, 43, 4, 3, 20, 65, 35, 6];

let sum = numbers.reduce((acc, value) => {
    return acc + (value % 2 === 0 ? value : 0);
}, 0);

console.log(sum);

//   5. Пользователь вводит 10 случайных значений. Каждое
//   значение необходимо записать в массив. С помощью
//   метода .every() проверить были ли все введенные
//   пользователем данные – числами.

let testArray = [];

for(let i = 0; i<10; i++) {
    let value = Number(prompt("Введите случайные значения."));
    testArray.push(value);
}
let res = testArray.every((value) => !isNaN(value));

console.log(res);