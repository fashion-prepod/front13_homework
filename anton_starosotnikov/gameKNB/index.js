const arrVarAnswer = ['камень', 'ножницы', 'бумага'];
function getUserChoise() {
    for (;;) {
        let userChoise = prompt('Сделайте выбор: камень, ножницы, бумага');
        if (userChoise === null) {
            return null;
        }
        if (isValidUserChoise(userChoise)) {
            return userChoise;
        } else {
            alert('Вы ввели не корректные данные, попробуйте снова');
        }
    }
}
function getCompChoise() {
    return arrVarAnswer[Math.round(Math.random() * 2)];
}
function isValidUserChoise(userChoise) {
    return arrVarAnswer.includes(userChoise.toLowerCase());
}
function startGame() {
    let numOfUserWins = 0
    let numOfCompWins = 0
    for (;;) {
        if (numOfUserWins === 10) {
            return alert(`Вы победили со счетом ${numOfUserWins} : ${numOfCompWins}`);
        } else if (numOfCompWins === 10) {
            return alert(`Вы проиграли со счетом ${numOfUserWins} : ${numOfCompWins}`);
        }
        const playerValue = getUserChoise();
        const compValue = getCompChoise();
        if (playerValue === null) {
            return alert(`Вы вышли из игры`);
        }
        if (playerValue === compValue) {
            alert(`Ничья, ${numOfUserWins} : ${numOfCompWins}`);
        } else if (
            playerValue === arrVarAnswer[0] && compValue === arrVarAnswer[1] ||
            playerValue === arrVarAnswer[1] && compValue === arrVarAnswer[2] ||
            playerValue === arrVarAnswer[2] && compValue === arrVarAnswer[0]
        ) {
            alert(`Компьютер выбрал ${compValue}, вы выйграли, ${++numOfUserWins} : ${numOfCompWins}`);
        } else {
            alert(`Компьютер выбрал ${compValue}, вы проиграли, ${numOfUserWins} : ${++numOfCompWins}`);
        }
    }
}
startGame();
