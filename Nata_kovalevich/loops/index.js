<<<<<<< HEAD

// Cформировать массив чисел, которые делятся на 3 (число элементов 8)

// const arr = [];
// let numberArr = 0
=======
// сформировать массив чисел, которые делятся на 3 (число элементов 8)

// const arr = [];
// let numberArr = 0

>>>>>>> master
// for( i = 1; arr.length < 8; i++){
//     if( i %3 === 0){
//         arr[numberArr] = i;
//         numberArr++;
// }
// }
// console.log(arr);

// Создать с помощью цикла массив, каждый элемент которого равен
//  квадрату своего номера.

// const arr = [];
// let numberArr = 0
<<<<<<< HEAD
// for( i = 1 ; arr.length < 10; i++){   
//         arr[numberArr] = i * i;
//         numberArr++;
=======

// for( i = 1 ; arr.length < 10; i++){
    
//         arr[numberArr] = i*i;
//         numberArr++;
    
>>>>>>> master
// }
// console.log(arr);

// Создать с помощью цикла массив, который одинаково читается как слева 
// направо, так и спаво налево (9)

// const arr = [];

<<<<<<< HEAD
// for( i = 0 ; arr.length < 9; i++){    
=======
// for( i = 0 ; arr.length < 9; i++){
    
>>>>>>> master
//           if( i % 2 === 0){
//                 arr[i] = 2;
//         } else {
//                 arr[i] = 1;
//         }   
// }
// console.log(arr);

<<<<<<< HEAD
=======

>>>>>>> master
// Создать массив из 10 чисел.Вывести на экраны 
// кол-во четных чисел из этого массива.

// const arr = [ 2, 5, 54, 41, 98, 10, 63, 87, 88, 90, 101];
// let evenNumber = 0;
<<<<<<< HEAD
// for( i = 0 ; arr.length < 10 ; i++){   
=======
// for( i = 0 ; arr.length < 10 ; i++){
    
>>>>>>> master
//         if( arr[i] % 2 === 0){
//             evenNumber++;        
//         }
//     }
//     console.log(evenNumber);

// Создать массив из 10 чисел.Вывести на экраны 
<<<<<<< HEAD
// наибольшее число из этого массива.

// const arr = [2, 4, 8, 9, 14, 52, 7, 3, 22, 44, 10];
// let maxNumber = arr[0];
// for (var i = 0; i < arr.length; i++) {
//     if(arr[i] > arr[0]){
//         maxNumber = arr[i];
//     }
// }
// console.log(maxNumber);

// 1. Дана строка "Мы любим javascript"
// изменить эту строку на "Мы ОБОЖАЕМ javascript"

// let str = "Мы любим javascript";
// let arr = str.split(' ');
// arr.splice(1, 1, 'ОБОЖАЕМ');
// let res = arr.join(' ');
// console.log(res);

// 2. Даны два массива

// 1. Пользователь вводит имя, если это имя есть в массиве1 
// добавьте его копию в массив2

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// let userName = prompt('Please enter your name','');
// let matchingName = people1.indexOf(userName)
// if (matchingName !== -1){
//     people2 = [...people2, ...people1];
// }
// console.log(people2);

// 2. Пользователь вводит имя, если это имя есть в массиве2
//  удалите это имя из массива

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
// let userName = prompt('Please enter your name','');
// let matchingName = people2.indexOf(userName)
// if (matchingName !== -1){
//     people2.splice(matchingName, 1);
// }
// console.log(people2);

// 3. Создайте новый массив только из тех имен, которые есть 
// в обоих массивах

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
// let people3 = [];

// for (let i = 0; i < people1.length; i++) {
//     if (people2.includes(people1[i])) {
//         people3.push(people1[i]);
//     };
// }
// console.log(people3);

// 4. Объедините два массива так, чтобы в получившемся массиве
//  не было одинаковых имен
// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// let people3 = [];
// for (let i = 0; i < people1.length; i++) {
//     if (!(people1.includes(people2[i]))) {
//       people3.push(people2[i]);
//     }
//   }
// let newArr = people3.concat(people1);
//     console.log(newArr);
=======
// наиб число из этого массива

// const arr = [ 2, 5, 54, 41, 98, 10, 63, 87, 88, 90, 101];


// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > arr[0]){
//         arr[0] = arr[i];
//     }

// }
// alert(arr[0]);
>>>>>>> master
