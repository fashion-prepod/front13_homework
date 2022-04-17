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
    // При таком подходе ножницы будут выпадать в 2 раза чаще чем всё остальное.
    // return arrVarAnswer[Math.round(Math.random() * 2)];

    // Вот здесь будет всё ОК.
    const randomCompNum = +Math.random().toFixed(2);
    if (randomCompNum < 0.33) {
        return arrVarAnswer[0];
    } else if (randomCompNum >= 0.66) {
        return arrVarAnswer[2];
    } else {
        return arrVarAnswer[1];
    }
}
function isValidUserChoise(userChoise) {
    return arrVarAnswer.includes(userChoise.toLowerCase());
}
function startGame() {
    let numOfUserWins = 0
    let numOfCompWins = 0
    for (;;) {
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
        if (numOfUserWins === 10) {
            alert(`Вы победили со счетом ${numOfUserWins} : ${numOfCompWins}`);
            if (confirm('Сыграть еще раз ?')) {
                return startGame();
            }
            return;
        } else if (numOfCompWins === 10) {
            alert(`Вы проиграли со счетом ${numOfUserWins} : ${numOfCompWins}`);
            if (confirm('Сыграть еще раз ?')) {
                return startGame();
            }
            return;
        }
    }
}
startGame();