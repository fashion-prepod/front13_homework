const arr = [
    { a: 2, b: 1 },
    { a: 5, b: 12 },
    { a: 95, b: 7 },
    { a: 51, b: 5 },
  ];
// 1.1 вывести в консоль 'its valid' если во всех оъектах a > b
//  вывести  'its invalid' если хотя бы в одном объекте a <= b
if (arr.every((elem) => {
    return elem.a>elem.b;
})) {
    console.log('its valid');
} else {console.log('its invalid')}
//  1.2 на основе массива arr создать новый массив у объектов которого
//  поле b возведено в квадрат
const arrSqNum = arr.map((elemArr) => {
    return {a: elemArr.a, b: elemArr.b**2};
})
console.log(arrSqNum);
//  1.3 на основе массива arr созать массив где все значения полей
//  a и b помещены как послеовательные значения
//  [2, 1, 5, 12, 95, 7, 51, 5]
let res = [];
arr.map((obj) => [obj.a, obj.b]).forEach((elem) => res.push(...elem));
console.log(res);

// 2. Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.
let arrNum = [23, 35, 56, 12, 39, 3, 9, 4];
let result = arrNum.filter((elemNum) => {
    return elemNum%2 === 0 && elemNum>9 && elemNum<100;
});
console.log(result);
// 3. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().
let arrName = ['Semyon', 'Sasha', 'Pasha', 'Nikita'];
const semyon = arrName.some((name) => {
    return name === 'Semyon';
});
console.log(semyon);
// 4. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.
const sumNum = [2, 1, 6, 31, 8, 3, 4];
const resSum = sumNum.reduce((sumEven, number) => {
    return sumEven + (number%2 === 0 ? number : 0);
});
console.log(resSum);
// 5. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.
const userNum = [];
for(let i = 0; i < 10; i++) {
    let prmt = +prompt('enter your number');
    userNum.push(prmt);
};
const resUserNum = userNum.every((userNumber) => {
    return !isNaN(userNumber)
});
console.log(resUserNum);