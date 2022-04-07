// 4. Пользователь вводит число n, вывести на экран все четные числа от 1 до n
let userNumber = prompt("Введите число");
if(userNumber === null || isNaN(userNumber) || userNumber===""){
    prompt("Не валидные данные");
} else{
    userNumber = +userNumber;
    //еще можно начинать с 2 и увеличивать number на 2 тогда можно избежать проверки, но я так понимаю суть задания именно в том чтобы был и цикл и условие
    if(userNumber>0){
        for(let number=1;number<userNumber;number++){
            if(number%2===0){
                console.log(number);
            }
        }
    } else{
        for(let number=1;number>userNumber;number--){
            if(number%2===0 && number !== 0){
                console.log(number);
            }
        }
    }
}