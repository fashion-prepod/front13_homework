// 1.1 вывести в консоль 'its valid' если во всех оъектах a > b
// вывести  'its invalid' если хотя бы в одном объекте a <= b

const arr = [
   { a: 2, b: 1 },
   { a: 5, b: 12 },
   { a: 95, b: 7 },
   { a: 51, b: 5 },
];

const result = arr.every((item) => item.a > item.b);
console.log(result ? 'its valid' : 'its invalid');