// 1. Дана строка "Мы любим javascript" изменить эту строку на "Мы ОБОЖАЕМ javascript"

let str = "Мы любим javascript";
let arr = str.split(" ");
let index = arr.indexOf("любим");
arr[index] = "обожаем";
let res = arr.join(" ");
console.log(res);

//*2
let people1 = ["Samuel", "Jack", "Thomas", "Henry", "Leo", "Connor", "David", "Ryan"];
let people2 = ["Connor", "Stanley", "Leo", "Albert", "Owen", "Oliver", "Ethan", "Thomas"]

//*1 Пользователь вводит имя, если это имя есть в массиве1 добавьте его копию в массив2
let name1 = prompt("Enter a name");
let match = people1.indexOf(name1)
console.log(match);
if(match !== -1) {
    people2 = [...people2, ...people1];
    //people2 = [...people2, name1] 
    //если копию имени
}
console.log(people2);
//*2 Пользователь вводит имя, если это имя есть в массиве2 удалите это имя из массива
let name2 = prompt("Enter a name");
let match2 = people2.indexOf(name2);
if(match2 !== -1) {
    people2.splice(match2, 1);
}
console.log(people2);
//*3 Создайте новый массив только из тех имен, которые есть в обоих массивах
let result = [...people1];

result = result.filter(el => {
    if(people2.indexOf(el) !== -1) return el
})

console.log(result);
//*4 Объедините два массива так, чтобы в получившемся массиве не было одинаковых имен
let newNamesFrom2 = people2.filter(el => {
    if(people1.indexOf(el) === -1) return el
})
let newNamesFrom1 = people1.filter(el => {
    if(people2.indexOf(el) === -1) return el
})
let newNames = [...newNamesFrom1, ...newNamesFrom2];
console.log(newNames);