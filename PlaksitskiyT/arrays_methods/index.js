// 1. Дана строка "Мы любим javascript"
// изменить эту строку на "Мы ОБОЖАЕМ javascript"

// let str = "Мы любим javascript";
// const strNew = str.split(' ');
// strNew.splice(1, 1, 'ОБОЖАЕМ');
// str = strNew.join(' ');
// console.log(str);


// 2. Даны два массива
// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве1 добавьте его копию в массив2

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// let userName = prompt('Enter name');
// for ( let i = 0; people1.length > i; i++) {
//   if (userName === people1[i]) {
//     people2.push(people1[i]);
//   } else {
//   }
// }
// console.log(people2);


// 2. Пользователь вводит имя, если это имя есть в массиве2 удалите это имя из массива

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// const userName = prompt('Enter name');
// for ( let i = 0; people2.length > i; i++) {
// if (userName === people2[i]) {
//   people2.splice(i, 1);
// } else {

// }
// }
// console.log(people2);


// 3. Создайте новый массив только из тех имен, которые есть в обоих массивах

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
// newArr = [];
// for(let i = 0; people1.length > i; i++){
//   for (let j = 0; people2.length > j; j++){
//     if (people1[i] === people2[j]) {
//       newArr.push(people1[i]);
//     }
//   }
// }
// console.log(newArr);

// 4. Объедините два массива так, чтобы в получившемся массиве не было одинаковых именgit

let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
let newArr = [];

for (let i = 0; people1.length > i; i++){
  if (people1.includes(people2[i]) !== true ) {
    newArr.push(people2[i]);
    }
}
console.log(newArr.concat(people1));
