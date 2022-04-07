// 1. Пользователь вводит год своего рождения
// вывести в консоль инфу сколько пользователю было в разные года до текущего
// например:
// вводим 2003:
// выводим: в 2003 было 1 год
// в 2004 было 2 год
// в 2005 было 3 год
// и тд
// в 2022 было 19 год


// let userBirthday = prompt('enter a year of your birthday :');
// if (userBirthday === null) {
//    console.log('you are cancelled the game')
// } else {
//    userBirthday = Number(userBirthday);
//    if (isNaN(userBirthday)) {
//       console.log('Please enter only numbers!!!');
//    } else {
//       let howManyYears = 2022 - userBirthday;
//       for (let i = 0; i <= howManyYears; i++, userBirthday++) {
//          console.log(`in ${userBirthday} he was ${i} year`);
//       }
//    }
// }


// 2. Пользователь вводит свой возраст. Вывести в консоль
// сколько лет юудет пользователю каждый год до 2030
// например вводим 14:
// выводим:
// в 2023 будет 15
// в 2024 будет 16
// и тд
// в 2030 будет 22

// const finalYear = 2030;
// let currentYear = 2022;
// let userAge = prompt('please, enter your age:');

// if (userAge === null) {
//    console.log('you are cancelled the game')
// } else {
//    userAge = Number(userAge);
//    if (isNaN(userAge)) {
//       console.log('Please enter only numbers!!!');
//    } else {
//       for (; currentYear < finalYear; currentYear++, userAge++) {
//          console.log(`in ${currentYear + 1} he will be ${userAge + 1}`);
//       }
//    }
// }

// 3. Пользователя спрашивают пароль
// если пароль введен неправильно, спрашивать еще раз
// если правильно вывести "добро пожаловать"
// если отмена вывести "вход отменен"

const password = '123check';
let infinitLoop = true;
while (infinitLoop) {
   let userPassword = prompt('enter your password');
   if (userPassword === null) {
      console.log('entering is cancelled');
      infinitLoop = false;
   } else {
      if (password === userPassword) {
         console.log('you are wellcome!!!');
         break;                               //проверочка другого способа выйти из цикла
      } else {
         console.log('wrong password! try again');
      }
   }
}