// 1. Пользователь вводит год своего рождения
// вывести в консоль инфу сколько пользователю было в разные года до текущего
// например: 
// вводим 2003:
// выводим: в 2003 было 1 год
// в 2004 было 2 год
// в 2005 было 3 год 
// и тд
// в 2022 было 19 год


let userBirthday = prompt('enter a year of your birthday :');
if (userBirthday === null) {
   console.log('you are cancelled the game')
} else {
   userBirthday = Number(userBirthday);
   if (isNaN(userBirthday)) {
      console.log('Please enter only numbers!!!');
   } else {
      let howManyYears = 2022 - userBirthday;
      for (let i = 0; i <= howManyYears; i++, userBirthday++) {
         console.log(`in ${userBirthday} he was ${i} year`);
      }
   }
}
