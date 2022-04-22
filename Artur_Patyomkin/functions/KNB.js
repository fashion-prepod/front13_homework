// Играет человек с компом
// человек вводит в промт "камень" "ножницы" или "бумага"
// после этого выводится алерт() в котором написан выбор компа
// например
// пользователь пишет "бумага", то
// "компьютер выбрал ножницы, вы проиграли, 2:1"
// если одно и то же
// то выводим "ничья"
// игра должна длиться до 10 побед любого из участников
// после того как кто-либо изщ участников достигнет 10ти побед выводим
// финального победителя

function transform(choiceNumber) {
   if (Math.round(choiceNumber) === 0) {                         //Math.round() в данном случае обработчик дурака, если пользователь введёт дробное число (т.е решил мухлевать).
      return 'rock';
   } else if (Math.round(choiceNumber) === 1) {
      return 'scissors';
   } else if (Math.round(choiceNumber) === 2) {
      return 'paper';
   }
}

const isValidChoice = (userChoice) =>
   !(isNaN(userChoice) ||
      userChoice === null ||
      userChoice === '' ||
      +userChoice < 0 ||
      +userChoice > 2
   )

function getComputerChoice() {
   const computer = transform(Math.round(Math.random() * 2));
   return computer;
}

function getUserChoice() {
   let user;
   for (; ;) {
      user = prompt('enter 1 if you choose "rock", enter 2 if you choose "scissors", enter 3 if you choose "paper"');
      if (user === null) {
         return null;
      }
      if (isValidChoice(user)) {
         user = transform(+user);
         return user;
      } else {
         alert('Your choice is invalid! Please, try again...')
      }
   }
}

function startGame() {
   let userPoints = 0;
   let computerPoints = 0;
   for (; userPoints < 10 && computerPoints < 10;) {
      const userChoice = getUserChoice();
      const computerChoice = getComputerChoice();
      if (userChoice === null) {
         alert('You LOST!!!');
         return;
      }
      if (userChoice === computerChoice) {
         alert(`Draw!!! user ${userPoints} : ${computerPoints} computer`);
      }
      if (userChoice === 'rock' && computerChoice === 'scissors') {
         ++userPoints;
         alert(`User wins! user ${userPoints} : ${computerPoints} computer`);
      }
      if (userChoice === 'rock' && computerChoice === 'paper') {
         ++computerPoints;
         alert(`Computer wins! user ${userPoints} : ${computerPoints} computer`);
      }
      if (userChoice === 'scissors' && computerChoice === 'rock') {
         ++computerPoints;
         alert(`Computer wins! user ${userPoints} : ${computerPoints} computer`);
      }
      if (userChoice === 'scissors' && computerChoice === 'paper') {
         ++userPoints;
         alert(`User wins! user ${userPoints} : ${computerPoints} computer`);
      }
      if (userChoice === 'paper' && computerChoice === 'rock') {
         ++userPoints;
         alert(`User wins! user ${userPoints} : ${computerPoints} computer`);
      }
      if (userChoice === 'paper' && computerChoice === 'scissors') {
         ++computerPoints;
         alert(`Computer wins! user ${userPoints} : ${computerPoints} computer`);
      }
   }
   if (userPoints === 10) {
      alert(`User is the final winner!!! user ${userPoints} : ${computerPoints} computer`)
      return;
   } else {
      alert(`Computer is the final winner!!! user ${userPoints} : ${computerPoints} computer`)
      return;
   }
}

startGame();