// 1. Пользователь вводит год своего рождения
// вывести в консоль инфу сколько пользователю было в разные года до текущего
// например: 
// вводим 2003:
// выводим: в 2003 было 1 год
// в 2004 было 2 год
// в 2005 было 3 год 
// и тд
// в 2022 было 19 год

// let userYears = prompt('Введите ваш год рождения ','');
// let age = 0;
// for (let i = userYears; i <= 2022; i++) {
//     if( isNaN(userYears) || userYears === null || userYears === '' ){
     
//      alert('Введите ваш год рождения');
//      break;
//     } else {
//          userYears = + userYears;
//          age++;
//          alert (`В ${i} будет ${age} лет`);
//     }  
//  }


// 2. Пользователь вводит свой возраст. Вывести в консоль 
// сколько лет будет пользователю каждый год до 2030
// например вводим 14:
// выводим:
// в 2023 будет 15
// в 2024 будет 16
// и тд
// в 2030 будет 22


//  let userNumber = prompt('Введите ваш возраст ','');

// for (let i = 2023; i <= 2030; i++) {
//     if( isNaN(userNumber) || userNumber === null || userNumber === '' ){
     
//      alert('Введите ваш возраст');
//      break;
//     } else {
//          userNumber = +userNumber;
//          userNumber++;
//          alert (`В ${i} будет ${userNumber}` );
//     }  
//  }

// 3. Пользователя спрашивают пароль
// если пароль введен неправильно, спрашивать еще раз
// если правильно вывести "добро пожаловать"
// если отмена вывести "вход отменен"

// let userPassword = prompt('Введите пароль ');
// let userCorrect = "abrakadabra";

// while (userCorrect !== userPassword){
//     let userPassword = prompt('Введите пароль '); 
//     if (userPassword === null){
//         alert('Вход отменен');  
//     } else if (userCorrect === userPassword){
//         alert('Добро пожаловать');
//         break; 
// }
// } 


// 4. Пользователь вводит число n, вывести на экран все четные числа от 1 до n

// let userNumber = + prompt('Введите число ','');

// for (let i = 2; i <= userNumber; i++) {
//     if (i % 2 == 0) {
//       alert( i );
// }
// }
// ______________________________________________________________________________________________________________________
// 1. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).

// let userNumber = prompt ('enter a number');
// if(userNumber !== null && !isNaN(userNumber) && userNumber > 1 ){
//     userNumber=+userNumber;
//     let sum = 0;
//     for(  let i = 1; i <= userNumber; i++ ){
//           sum+=i;

//     } 
//     console.log (`sum from 1 to ${userNumber} is ${sum}`  )
//     } else {
//     console.log ('wont work');
// }


// 2. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

// const promtAmound = +prompt ('введите кол-во чисел');

// let positive = 0;
// let negative = 0;
// let zeros = 0;

// for (let i = 0; i < promtAmound; i++){
//        let userNumber = +prompt('введите число');
//     if(userNumber > 0) {
//     positive++;
//     } else if(userNumber < 0){
//     negative++;
//     } else {
//     zeros++;
//     }
// }

// console.log(positive, negative, zeros);

// 3. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// for(let i = 10; i < 100;i++){

//     if(i%6 !== 0 && i%4 === 0){
//     console.log(i);
// }
// }

// 4. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

//  не работает break в 1-ом if

// let average = 0;

// for(n = 1 ; ;n++ ){
//     let value = prompt("Введите число", '');
    
//     if (value === null) {
//     break; 
// } 
//         value = +value;

//     if(!value)break;

//         average += value;
//         res = average/n;      
// }
// alert( 'Среднее арифметическое: ' + res );

// 5. Проверка на таблицу умножения
// Пользователь вводит два случайных числа
// После чего вводит еще одно число, которое должно являться произведением 
// первых двух
// Если пользователь ввел правильное произведение вывести собщение что он молодец!
// Если нет, выводим пользователю правильный ответ.

//     let one = prompt('Enter the number',''); 
//     let two = prompt('Enter the number','');
//     let resultUser=prompt('Enter result',''); 
//     let resultCorrect; 
//     resultCorrect = one*two;

//     if (one === null || two === null || resultUser===null){
//     alert('please enter a number');
//     } 
//     if (one === '' || two === ''|| resultUser === ''){
//     alert('Please enter a number');
//     }
//     if (isNaN(one) || isNaN(two)){
//      alert('You didnt enter a number, please enter a number');
//     } else {
//          one=+one;
//          two=+two;
//          resultUser===+resultUser;
//     if (`${resultCorrect}`===resultUser){
//                alert ('Well done');
//     }  else  {
//              alert (`Correct answer ${resultCorrect}`);
//     }
// }

// 6.
// Под диваном живет 100 хомячков.
// Пользователь вводит число хомячков,
// которое он хочет достать из-под дивана.
// Если число оставшихся хомячков меньше
// чем число, которое ввел пользователь
// вывести сообщение.

// let hamstersAmount = 100;

// for (let attempts = 1; ; attempts++) {
//     let userHamstersAmount = prompt('how many hamsters do u wanna get ?');

//     if (isNaN(userHamstersAmount) || userHamstersAmount === '') {
//         alert('please enter correct number');
//         continue;
//     } else if (userHamstersAmount === null) {
//         alert(`you've cancelled the game`);
//         break;
//     } 

//     userHamstersAmount = +userHamstersAmount;
    
//     if (hamstersAmount === userHamstersAmount) {
//         alert(`you got all hamsters in ${attempts} times`);
//         break;
//     } else if (userHamstersAmount > hamstersAmount) {
//         alert('too much, there is no such amount of hamsters');
//     } else {
//         hamstersAmount = hamstersAmount - userHamstersAmount;
//         alert(`you successfully got ${userHamstersAmount} hamsters`);
//     }
// }

// 7. Пользователь вводит два числа n и m, с помощью цикла вывести квадраты всех
// чисел от n до m.
// Например:
// Ввели число 2
// Ввели число 5
// выводим: 2*2 потом 3*3 потом 4*4 потом 5*5

// let userOne = +prompt('Enter the number','');
// let userTwo = +prompt('Enter the number','');

//outer: for (let i = userOne; i <= userTwo;i++){   
//          squareNumber = i*i;  
//          console.log (i + '*' + i +'=' + squareNumber );
//          if (!userOne || !userTwo) break outer; 
// }

// 8. Пользователь вводит число n. Написать цикл, который выводит все числа от n до 0.

// let userNumber = +prompt('Enter number ','');

// outer: for(i = userNumber; i >= 0; i--){
//        if (!userNumber) break outer;
//        console.log(i);       
// }  

// 9. Написать программу, в которой пользователя просят ввести числа 5 раз. Причем
// каждое последующее число должно быть больше предыдущего, иначе вывести
// ошибку.

// let one = + prompt(' Введите число','')
// let two = + prompt(' Введите число, большее предыдущего','');
// let there = + prompt(' Введите число, большее предыдущего','');
// let four = + prompt(' Введите число, большее предыдущего','');
// let five = + prompt(' Введите число, большее предыдущего','');

// if(one < two && two < there && there < four && four < five ){
//     console.log(one, two, there, four, five);
// } else {
//     alert('value error');
// }

// 10. Написать программу-заику. Пользователь вводит число. Вывести количество "за"
// (в слове "заика") равное этому числу.
// Например:
// Вводим 3
// Программа выводит "зазазаика"
// Вводим 5
// Программа выводит "зазазазазаика"

// let userNumber = + prompt('Enter the number','');
// let str= '';

// if( isNaN(userNumber)|| userNumber === null || userNumber === ''|| userNumber<=0 ){
//     alert('Введите число');
// } else {
//     for (let i = 1; i <= userNumber; i++){     
//         str +='за';               
// } 
//     str = str +'ика';    
// }
