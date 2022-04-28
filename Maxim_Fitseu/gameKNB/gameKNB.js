// Играет пользователь с компьтером
// человек вводит prompt камень ножницы или бумага
// после этого выводится алерт в котором написан выбор компа
// компьтер выбрал ножницы вы проиграли, 2 пользователь : 1 компьютер
// если одно и то же, то выводим ничья
// игра должна длиться до 10 побед любого из участников 
// после того как кто либо из участников достингает 10 ти побед вывести финального победителя
// новая игра
// 0 1 2 - камень ножницы бумага
// Math.random() * 2 тогда рандом будет от 0 до 2 
// Math.round() отбросить дробную часть 
// Math.round(Math.random() * 2)

const arrAnswer = ['rock', 'scissors', 'paper'];
function getUserChoice() {
    for (;;) {
        let userChoice = prompt('Select: rock, scissors, paper');
        if (userChoice === null) {
            return null;
        }
        if (isValidUserChoice(userChoice)) {
            return userChoice;
        } else {
            console.log('Incorrect data');
        }
    }
}

function getCompChoice() {
    const randomCompNumber = +Math.random().toFixed(2);
    if (randomCompNumber < 0.33) {
        return arrAnswer[0];
    } else if (randomCompNumber >= 0.66) {
        return arrAnswer[2];
    } else {
        return arrAnswer[1];
    }
}
function isValidUserChoice(userChoice) {
    return arrAnswer.includes(userChoice.toLowerCase());
}
function startGame() {
    let numOfUserWins = 0
    let numOfCompWins = 0
    for (;;) {
        const playerValue = getUserChoice();
        const compValue = getCompChoice();
        if (playerValue === null) {
            return alert(`You left game`);
        }
        if (playerValue === compValue) {
            alert(`Tie, ${numOfUserWins} : ${numOfCompWins}`);
        } else if (
            playerValue === arrAnswer[0] && compValue === arrAnswer[1] ||
            playerValue === arrAnswer[1] && compValue === arrAnswer[2] ||
            playerValue === arrAnswer[2] && compValue === arrAnswer[0]
        ) {
            alert(`Comp choice ${compValue}, you win, ${++numOfUserWins} : ${numOfCompWins}`);
        } else {
            alert(`Comp choice ${compValue}, you lose, ${numOfUserWins} : ${++numOfCompWins}`);
        }
        if (numOfUserWins === 10) {
            alert(`You win with score: ${numOfUserWins} : ${numOfCompWins}`);
            if (confirm('Another one?')) {
                return startGame();
            }
            return;
        } else if (numOfCompWins === 10) {
            alert(`You lose with score ${numOfUserWins} : ${numOfCompWins}`);
            if (confirm('Another one?')) {
                return startGame();
            }
            return;
        }
    }
}
startGame();