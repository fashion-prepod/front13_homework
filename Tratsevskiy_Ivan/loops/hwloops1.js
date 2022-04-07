//1. Пользователь вводит год своего рождения
// вывести в консоль инфу сколько пользователю было в разные года до текущего
// например:
// вводим 2003:
//выводим: в 2003 было 1 год
// в 2004 было 2 год
// и тд
// в 2022 было 19 год

const currentYear = 2022;
let userBirth = prompt("Введите год своего рождения");
if(userBirth === null || isNaN(userBirth) || userBirth===""){
    prompt("Не валидные данные");
} else{
    userBirth = +userBirth;
    let difference=currentYear-userBirth+1;
    for(let year = 1;year<=difference;year++){
        console.log(`В ${userBirth++} польщователю было ${year} лет`);
    }
}