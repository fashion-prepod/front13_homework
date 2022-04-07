// Task_1. Дана строка "Мы любим javascript"
// изменить эту строку на "Мы ОБОЖАЕМ javascript"

// let string = "Мы любим javascript";
// let arr = string.split(" ");
// arr.splice(1, 1, "ОБОЖАЕМ");
// let stringChanged = arr.join(' ');
// console.log(stringChanged);


// Task_2.1 Даны два массива
// 1. Пользователь вводит имя, если это имя есть в массиве1 добавьте его копию в массив2

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
// let userName = prompt("enter your name");
// for (let i = 0; i < people1.length; i++) {
//   if (userName === people1[i]) {
//     people2.push(userName);
//   }
// }
//   console.log(people2);

// Task_2.2 Даны два массива
// 2. Пользователь вводит имя, если это имя есть в массиве2 удалите это имя из массива

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
// let userName = prompt("enter your name");
// for (let i = 0; i < people2.length; i++) {
//   if (userName === people2[i]) {
//     people2.splice(i, 1);
//     console.log(people2);
//   }
// }

//Task_2.3 Даны два массива
//3. Создайте новый массив только из тех имен, которые есть в обоих массивах
// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
// let newArr = [];
// for (let i = 0; i < people1.length; i++) {
//    if (people2.indexOf(people1[i]) >= 0) {
//       newArr.push(people1[i]);
//    }
// }
//   console.log(newArr);

