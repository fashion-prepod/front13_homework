// Task_1. Дана строка "Мы любим javascript"
// изменить эту строку на "Мы ОБОЖАЕМ javascript"

// let string = "Мы любим javascript";
// let arr = string.split(" ");
// arr.splice(1, 1, "ОБОЖАЕМ");
// let stringChanged = arr.join(' ');
// console.log(stringChanged);


// Task_2.1 Даны два массива
// 1. Пользователь вводит имя, если это имя есть в массиве1 добавьте его копию в массив2

let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
let userName = prompt("enter your name");
for (let i = 0; i < people1.length; i++) {
  if (userName === people1[i]) {
    people2.push(userName);
  }
}
  console.log(people2);