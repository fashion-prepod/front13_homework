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

const isValidMeaning = (userChoice) =>
  !(
    userChoice === Number ||
    userChoice === null ||
    userChoice === "" 
  );

  const gamesCount = 10;

  const answers = {
      scissors: 'ножницы',
      stone: 'камень',
      paper: 'бумага',
  };

  function startGame () {
    
    let userWinCounter = 0;
    let computerWinCounter = 0;
    for (;userWinCounter < gamesCount && computerWinCounter < gamesCount;) {
        
        const currentUserChoice = getUserChoice();
        const currentComputerChoice = generateComputerChoice();
        if(currentUserChoice === null){
            alert('Закончили');
            break;
        } else if (currentUserChoice === currentComputerChoice) {
            alert('Ничья!');
        } else if (currentUserChoice === answers.stone && currentComputerChoice === answers.scissors) {
            userWinCounter++;
            alert(`Вы выиграли! Компьютер выбрал ${currentComputerChoice}. Счет ${userWinCounter}:${computerWinCounter} `);
        } else if (currentUserChoice === answers.stone && currentComputerChoice === answers.paper) {
            computerWinCounter++;
            alert(`Вы проиграли! Компьютер выбрал ${currentComputerChoice}. Счет ${userWinCounter}:${computerWinCounter}`);
        } else if (currentUserChoice === answers.scissors && currentComputerChoice === answers.stone) {
            computerWinCounter++;
            alert(`Вы проиграли! Компьютер выбрал ${currentComputerChoice}. Счет ${userWinCounter}:${computerWinCounter}`);
        } else if (currentUserChoice === answers.scissors && currentComputerChoice === answers.paper) {
            userWinCounter++;
            alert(`Вы выиграли! Компьютер выбрал ${currentComputerChoice}. Счет ${userWinCounter}:${computerWinCounter} `);
        } else if (currentUserChoice === answers.paper && currentComputerChoice === answers.stone) {
            userWinCounter++;
            (`Вы выиграли! Компьютер выбрал ${currentComputerChoice}. Счет ${userWinCounter}:${computerWinCounter} `);
        } else if (currentUserChoice === answers.paper && currentComputerChoice === answers.scissors) {
            computerWinCounter++;
            alert(`Вы проиграли! Компьютер выбрал ${currentComputerChoice}. Счет ${userWinCounter}:${computerWinCounter}`);
        }
    }
    alert(`Игра окончена Счет ${userWinCounter}:${computerWinCounter}`)

}
startGame();

function getUserChoice () {
    for (;;) {
        let userChoice = prompt('Выберите одно из трех и введите свой выбор: камень, ножницы или бумага');
        
        if (userChoice === Number || userChoice === '') {
            alert('Введите одно из трех значений');
            continue;
        } else if (userChoice === null) {
            return null;
        } else if (isValidMeaning(userChoice)) {
            
            if (userChoice.toLowerCase() === answers.stone) {
                return answers.stone;
            } else if (userChoice.toLowerCase() === answers.scissors) {
                return answers.scissors;
            } else if (userChoice.toLowerCase() === answers.paper) {
                return answers.paper;
            }
            
        }
    }
}


function generateComputerChoice () {
    let computerChoice = Math.round(Math.random() * 2);
    
    if (computerChoice === 0) {
        return answers.stone;
    } else if (computerChoice === 1) {
        return answers.scissors;
    } else if (computerChoice === 2) {
        return answers.paper;
    }
}