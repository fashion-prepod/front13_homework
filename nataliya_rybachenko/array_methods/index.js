// 1. Дана строка "Мы любим javascript"
// изменить эту строку на "Мы ОБОЖАЕМ javascript"

// let string1 = "Мы любим javascript";
// const arr = string1.split(" ");
// arr.splice(1, 1, "обожаем");
// let string2 = arr.join(" ");
// console.log(string2);


// 2. Даны два массива
// let people1 = ['Samuel', '<p></p>Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве1 добавьте его копию в массив2

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanly', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', ' Thomas'];
// peopleNew = people2.slice();
// let namePeople = prompt('Enter your name');
// for(let i = 0; i < people1.length; i++){
//     if(namePeople === people1[i]){
//         peopleNew.push(namePeople)
//     }
// }
// console.log(peopleNew);


// 2. Пользователь вводит имя, если это имя есть в массиве2 удалите это имя из массива

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanly', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', ' Thomas'];
// peopleNew = people2.slice();
// let namePeople = prompt('Enter your name');
// for(let i = 0; i < people2.length; i++){
//     if(namePeople === peopleNew[i]){
//         peopleNew.splice(i, 1,)
//     }
// }
// console.log(peopleNew);


// 3. Создайте новый массив только из тех имен, которые есть в обоих массивах

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanly', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', ' Thomas'];
// let people3 = [];
// for(let i = 0; i < people1.length; i++){
//     if(people2.indexOf(people1[i]) !== -1){
//         people3.push(people1[i]);
//     }
// }
// console.log(people3);


// 4. Объедините два массива так, чтобы в получившемся массиве не было одинаковых имен

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanly', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', ' Thomas'];
// let people3 = [];
// for(let i = 0; i < people1.length; i++){
//     if(people2.indexOf(people1[i]) === -1){
//         people3.push(people1[i])
//     }
// }
// for(let i = 0; i < people2.length; i++){
//     if(people1.indexOf(people2[i]) === -1){
//         people3.push(people2[i])
//     }
// }
// console.log(people3)