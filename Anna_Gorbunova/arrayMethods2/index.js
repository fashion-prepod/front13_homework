// 1.1 
// вывести в консоль 'its valid' если во всех объектах a > b
// вывести  'its invalid' если хотя бы в одном объекте a <= b

// const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 },
//     { a: 51, b: 5 },
// ];

// const res = arr.every((item) => {
//     return item.a > item.b;
// })
// console.log(res ? 'it\'s valid' : 'it\'s invalid');


// 1.2 
// на основе массива arr создать новый массив у объектов которого
// поле b возведено в квадрат

// const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 },
//     { a: 51, b: 5 },
// ];

// const newArr = arr.map((item) => {
//     return {
//         a: item.a,
//         b: item.b ** 2
//     };
// })
// console.log(newArr);