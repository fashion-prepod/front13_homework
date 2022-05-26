// 1.    1.1 вывести в консоль 'its valid' если во всех оъектах a > b
//    вывести  'its invalid' если хотя бы в одном объекте a <= b
// const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 },
//     { a: 51, b: 5 },
//   ];
// let res = arr.every(function(item){  
//         return  item.a > item.b;
// })
// console.log(res ? 'its valid' : 'its invalid');


// 1.2 на основе массива arr создать новый массив у объектов которого
// поле b возведено в квадрат
// const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 },
//     { a: 51, b: 5 },
//   ];

// let res = arr.reduce(function(acc, item){
//   item.b = item.b**2;
//   acc.push(item)
//   return  acc ;
// },[]) 
// console.log(res);

//    1.3 на основе массива arr созать массив где все значения полей
//    a и b помещены как послеовательные значения
//    [2, 1, 5, 12, 95, 7, 51, 5]
// const arr = [
//        { a: 2, b: 1 },
//        { a: 5, b: 12 },
//        { a: 95, b: 7 },
//        { a: 51, b: 5 },
//    ];
// let res = arr.reduce(function(acc, item){
  
//   acc.push(item.a, item.b)
//   return  acc ;  
// },[]) 
// console.log(res);
  
//   2. Дан случайный массив чисел. С помощью метода .filter()
//   отфильтруйте массив так, чтобы в новый массив вошли
//   только четные двухзначные числа из исходного.

// const arr = [22, 33, 84, 95, 78 , 55, 1, 7];
// let evenArr = arr.filter(function(even){
//     return even % 2 === 0;
// })
// alert(evenArr);

//   3. Дан случайный массив имен. Выяснить есть ли в этом
//   массиве «Семён» с помощью метода .some().

// const randomNames = ['Дима', 'Надя','Семен','Максим','Валера', 'Олеся', 'Влад','Витя'];
// function semyon(name){
//     return name === 'Семен';
// } 
// alert(randomNames.some(semyon));

//   4. Дан массив случайных чисел. С помощью метода
//   .reduce() просуммировать только четные числа из этого
//   массива.

// const arr = [123, 555, 888, 987, 562, 412, 1000, 4006];
// let res = arr.reduce(function(sum, even){
//         return sum += even % 2 ? 0 : even;

// },0)
// alert(res);

//   5. Пользователь вводит 10 случайных значений. Каждое
//   значение необходимо записать в массив. С помощью
//   метода .every() проверить были ли все введенные
//   пользователем данные – числами

// const randomNum = [];

// for(i =0; i < 10; i++){  
//    let user = prompt('Введите значение','') 
//    if(user === null || user === ''){
//        alert('Необходимо ввести значение','')
//        break;
//    } else {
//         randomNum.push(user);
//    }
  
// }
// console.log(randomNum);
// let res = randomNum.every(function(item){
//     return !isNaN(item) ;
// })
// console.log(res);