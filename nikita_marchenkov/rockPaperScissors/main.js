
function isValidStep(step) {
    return (step === "камень" || step === "ножницы" || step === "бумага") 
}

function getCompStep() {
    let number = Math.random() * 3;
    if(number > 0 && number < 1)  {
        return "камень"
    } else if(number > 1 && number < 2) {
        return "ножницы"
    } else {
        return "бумага"
    }
}

function rockPaperScissors() {
    let userWins = 0;
    let compWins = 0;
    for(let i = 0; compWins < 10 && userWins < 10; i++) {
        let compStep = getCompStep();
        let step = prompt("Введите ваш ход.");
        let userCurrentWin = false;
        if(isValidStep(step)) {
            switch (compStep) {
                case "камень":{
                   if (step === "ножницы") {
                       compWins++;
                       alert(`Компьютер выбрал ${compStep}, вы ${userCurrentWin ? "победили" : "проиграли"}, счет ${userWins}:${compWins}`)
                   } else if (step === "бумага") {
                       userWins++;
                       userCurrentWin = true;
                       alert(`Компьютер выбрал ${compStep}, вы ${userCurrentWin ? "победили" : "проиграли"}, счет ${userWins}:${compWins}`)
                   } else {
                       alert(`Ничья, счет ${userWins}:${compWins}`)
                   }
                   break;
                 }
                case "ножницы" : {
                    if (step === "бумага") {
                        compWins++;
                        alert(`Компьютер выбрал ${compStep}, вы ${userCurrentWin ? "победили" : "проиграли"}, счет ${userWins}:${compWins}`)
                    } else if (step === "камень") {
                        userWins++;
                        userCurrentWin = true;
                        alert(`Компьютер выбрал ${compStep}, вы ${userCurrentWin ? "победили" : "проиграли"}, счет ${userWins}:${compWins}`)
                    } else {
                        alert(`Ничья, счет ${userWins}:${compWins}`)
                    }
                    break;
                }
                case "бумага" : {
                    if (step === "камень") {
                        compWins++;
                        alert(`Компьютер выбрал ${compStep}, вы ${userCurrentWin ? "победили" : "проиграли"}, счет ${userWins}:${compWins}`)
                    } else if (step === "ножницы") {
                        userWins++;
                        userCurrentWin = true;
                        alert(`Компьютер выбрал ${compStep}, вы ${userCurrentWin ? "победили" : "проиграли"}, счет ${userWins}:${compWins}`)
                    } else {
                        alert(`Ничья, счет ${userWins}:${compWins}`)
                    }
                    break;
                }
            }
            
        } else return;
    }
    return userWins > compWins ? alert("Вы победили!") : alert("Вы проиграли, компьютер победил:(");
}

rockPaperScissors();
