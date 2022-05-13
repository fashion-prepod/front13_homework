
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

// for(i = 0; i < people1.lenght; i++){
//     if(userName === people1[i]){
        
//        people2.push(userName);
        
//     }
// }
// console.log(people2);

// 2. Пользователь вводит имя, если это имя есть в массиве2
//  удалите это имя из массива

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];


// let userName = prompt('Please enter your name','');

// for(i = 0; i < people2.lenght; i++){
//     if(userName === people2[i]){
        
//        people2.splice(i, 1);
        

//     }
// }
// console.log(people2);

// 3. Создайте новый массив только из тех имен, которые есть 
// в обоих массивах

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];


// let newArr = [];
// for (let i = 0; i < people1.length; i++) {
//     for (let j = 0; j < people2.length; j++) {
//         if (people1[i] === people2[j]) {
//             newArr.push(people1[i]);
//         }
//     }
// }
// console.log(newArr);

// 4. Объедините два массива так, чтобы в получившемся массиве
//  не было одинаковых имен
