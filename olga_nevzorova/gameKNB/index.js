// Играет человек с компом
// человек вводит в промт "камень" "ножницы" или "бумага"
// после этого выводится алерт() в котором написан выбор компа
// например
// пользователь пишет "бумага", то
// "компьютер выбрал ножницы, вы проиграли, 2:1"
// если одно и то же
// то выводим "ничья"
// игра должна длиться до 10 побед любого из участников
// после того как кто - либо из участников достигнет 10ти побед выводим
// финального победителя



function startGame() {
    let winUser = 0;
    let winRobot = 0;

    do {
        const robotChoice = Math.round(Math.random() * 2);
        const userChoice = getUserChoice('Do your choice: камень, ножницы, бумага');
        if (userChoice === null) {
            break;
        } else {
            chekResult(userChoice, robotChoice);
        }

    } while (winUser < 10 && winRobot < 10)

    if (winUser === 10) {
        alert('YOU WINNER !!!');
    } else if (winRobot === 10) {
        alert('ROBOT WINNER !!!');
    } else if (winUser === 10 || winRobot === 10) {
        alert('DEAD HEAD');
    }



    function chekResult(userChoice, robotChoice) {
        const userName = ['камень', 'ножницы', 'бумага'];
        if (userChoice === robotChoice) {
            winUser++;
            winRobot++;
            alert(`Robot chose "${userName[robotChoice]}" DEAD HEAD ... score ${winUser}:${winRobot}`);
        } else if (userChoice === 0 && robotChoice === 1 || userChoice === 1 && robotChoice === 2 || userChoice === 2 && robotChoice === 0) {
            winUser++;
            alert(`Robot chose "${userName[robotChoice]}" YOU WIN ... score ${winUser}:${winRobot}`);
        } else {
            winRobot++;
            alert(`Robot chose "${userName[robotChoice]}" YOU LOST ... score ${winUser}:${winRobot}`);
        }
    }


    function getUserChoice(message) {
        let userText;
        do {
            userText = prompt(message);
            if (userText.toLowerCase() === 'камень') {
                return 0;
            } else if (userText.toLowerCase() === 'ножницы') {
                return 1;
            } else if (userText.toLowerCase() === 'бумага') {
                return 2;
            } else if (userText === null) {
                return null;
            } else {
                alert('Try enter: камень, ножницы, бумага')
            }
        } while (true);
    }
}
startGame();