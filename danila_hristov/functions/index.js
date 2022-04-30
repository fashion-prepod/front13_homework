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

// Math.round(Math.random() * 2)

function computerTurn () {
    let cmpTurn = Math.round(Math.random() * 2)
    if (cmpTurn === 0) {
        return 'scissors'
    } else if (cmpTurn === 1) {
        return 'paper'
    } else if (cmpTurn === 2) {
        return 'rock'
        
    }
}
function validCheck (userTurn) {    
    if (userTurn === 'scissors' || userTurn === 'paper' || userTurn === 'rock') {
        return true
    } else {return false}
}
function game () {
    let compWin = 0;
    let userWin = 0;
    for (let i = 0; compWin < 10 && userWin < 10; i++) {
        let userTurn = prompt('enter your choice')
    if (validCheck(userTurn)) {
        let compChoice = computerTurn(); 
        let userWinAmount = false;
        switch (userTurn) {
            case 'scissors':
                if (compChoice ==='scissors') {
                    alert(`draw, score ${userWin}:${compWin}`);
                } 
                if (compChoice === 'paper') {
                    userWin++;
                    alert(`Computer chose ${compChoice}, you ${userTurn ? "win" : "lose"}, score ${userWin}:${compWin}`);
                }
                if (compChoice === 'rock') {
                    compWin++;
                    alert(`Computer chose ${compChoice}, you ${userTurn ? "win" : "lose"}, score ${userWin}:${compWin}`);
                }
                break;
        
            case 'paper':
                if (compChoice ==='scissors') {
                    compWin++;
                    alert(`Computer chose ${compChoice}, you ${userTurn ? "win" : "lose"}, score ${userWin}:${compWin}`);
                } 
                if (compChoice === 'paper') {
                    alert(`draw, score ${userWin}:${compWin}`);
                }
                if (compChoice === 'rock') {
                    userWin++;
                    alert(`Computer chose ${compChoice}, you ${userTurn ? "win" : "lose"}, score ${userWin}:${compWin}`);
                }
                break;
            case 'rock':
                if (compChoice ==='scissors') {
                    userWin++;
                    alert(`Computer chose ${compChoice}, you ${userTurn ? "win" : "lose"}, score ${userWin}:${compWin}`);
                } 
                if (compChoice === 'paper') {
                    compWin++;
                    alert(`Computer chose ${compChoice}, you ${userTurn ? "win" : "lose"}, score ${userWin}:${compWin}`);
                }
                if (compChoice === 'rock') {
                    alert(`draw, score ${userWin}:${compWin}`);
                }
                break;    
        }
    }
}
alert(`${userWin > compWin ? 'you' : 'computer'} win`)
}
console.log(game())