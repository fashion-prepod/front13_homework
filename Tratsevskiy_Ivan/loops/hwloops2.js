// 2. Пользователь вводит свой возраст. Вывести в консоль
// сколько лет будет пользователю каждый год до 2030
// например вводим 14:
// выводим:
// в 2023 будет 15
// в 2024 будет 16
// и тд
// в 2030 будет 22
let userAge = prompt("Введите свой возраст");
if(userAge === null || isNaN(userAge) || userAge===""){
    prompt("Не валидные данные");
} else{
    const tillYear=2030;
    let currentYear=2022;
    userAge= +userAge;
    for(;currentYear<=tillYear;currentYear++){
        console.log(`В ${currentYear} польщователю будет ${userAge++} лет`);
    }
}