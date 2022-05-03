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

function convertNumberToChoice(choiceNumber) {
   const choiceNumberInteger = Math.round(choiceNumber);
   if (choiceNumberInteger === 0) {                         //Math.round() в данном случае обработчик дурака, если пользователь введёт дробное число (т.е решил мухлевать).
      return 'rock';
   } else if (choiceNumberInteger === 1) {
      return 'scissors';
   } else if (choiceNumberInteger === 2) {
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
   const computer = convertNumberToChoice(Math.round(Math.random() * 2));
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
         user = convertNumberToChoice(+user);
         return user;
      } else {
         alert('Your choice is invalid! Please, try again...');
      }
   }
}
function whoIsWinner(userChoice, computerChoice, userPoints, computerPoints) {
   if (userChoice === computerChoice) {
      alert(`Draw!!! user ${userPoints} : ${computerPoints} computer`);
      return 'draw';
   }
   if (userChoice === 'rock' && computerChoice === 'scissors') {
      alert(`User wins! user ${++userPoints} : ${computerPoints} computer`);
      return 'user';
   }
   if (userChoice === 'rock' && computerChoice === 'paper') {
      alert(`Computer wins! user ${userPoints} : ${++computerPoints} computer`);
      return 'comp';
   }
   if (userChoice === 'scissors' && computerChoice === 'rock') {
      alert(`Computer wins! user ${userPoints} : ${++computerPoints} computer`);
      return 'comp';
   }
   if (userChoice === 'scissors' && computerChoice === 'paper') {
      alert(`User wins! user ${++userPoints} : ${computerPoints} computer`);
      return 'user';
   }
   if (userChoice === 'paper' && computerChoice === 'rock') {
      alert(`User wins! user ${++userPoints} : ${computerPoints} computer`);
      return 'user';
   }
   if (userChoice === 'paper' && computerChoice === 'scissors') {
      alert(`Computer wins! user ${userPoints} : ${++computerPoints} computer`);
      return 'comp';
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
      const winner = whoIsWinner(userChoice, computerChoice, userPoints, computerPoints);
      if (winner === 'draw') {
         continue;
      }
      winner === 'user' ? userPoints++ : computerPoints++;
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
