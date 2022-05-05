// 1.
const arr = [
    { a: 2, b: 1 },
    { a: 5, b: 12 },
    { a: 95, b: 7 },
    { a: 51, b: 5 },
];

//    1.1 вывести в консоль 'its valid' если во всех оъектах a > b
//    вывести  'its invalid' если хотя бы в одном объекте a <= b


const res = arr.every((item) => item.a > item.b);
if (res === true) {
    console.log('its valid');
} else { console.log('its invalid') };



//    1.2 на основе массива arr создать новый массив у объектов которого
//    поле b возведено в квадрат

// const newArr = arr.map((item) => ({ a: item.a, b: item.b ** 2 }))

const newArr = arr.map(({ a, b }) => ({ a, b: b ** 2 }));
console.log(newArr);


//    1.3 на основе массива arr созать массив где все значения полей
//    a и b помещены как послеовательные значения
//    [2, 1, 5, 12, 95, 7, 51, 5]

// const newArr = arr.map((item) => [item.a, item.b])
// const newArr2 = newArr.flat(Infinity);
// console.log(newArr2);

let allArr = arr.reduce((acc, item) => {
    return [...acc, item.a, item.b];
}, []);
console.log(allArr)


// let allArr = arr.reduce((acc, item) => {
//     acc.push(item.a, item.b)
//     return acc;
// }, []);
// console.log(allArr)


