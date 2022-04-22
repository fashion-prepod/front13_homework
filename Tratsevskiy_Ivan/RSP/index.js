function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const isValidChoose = (userChoose) =>
{
    if(userChoose === "камень" ||
    userChoose === "бумага" ||
    userChoose === "ножницы"){
        return true;
    }

}
const getChooseFromUser = () => {
    let userChoose;
    do{
        userChoose = prompt("Введите камень, ножницы или бумага");
        if (userChoose===null){
            return null;
        }
        if(isValidChoose(userChoose)){
            console.log(userChoose);
            return userChoose;
        } else{
            alert("Вы ввели не валидные данные");
        }
    } while(true)
};
function generateAiChoose(){
    const objects = ["камень","ножницы","бумага"];
    const aiChoose= objects[getRandomInt(3)];
    return aiChoose;
    console.log(aiChoose);
}
function startNewGame(){
    if(confirm("Сыграть еще?")){
        return this;
    }else{
        return;
    }
}
function oneGameResult(whoWon,aiScore,userScore,aiChoose,userChoose){
    return `Победитель - ${whoWon}
    Счет
    Комп:${aiScore} выбросил ${aiChoose}
    Вы:${userScore} выбросили ${userChoose}
    `
}
function startGame () {
    let userScore = 0;
    let aiScore = 0;
    const rock = "камень";
    const paper = "бумага";
    const scis = "ножницы";
    for(;userScore < 10 && aiScore < 10;){
        const userChoose = getChooseFromUser();
        const aiChoose = generateAiChoose();
        console.log(userChoose);
        if(userChoose === aiChoose){
            alert("Ничья");
            continue;
        }else if((userChoose === rock  && aiChoose === scis) || (userChoose === scis && aiChoose === paper) || (userChoose === paper && aiChoose === rock)){
            userScore++;
            alert(oneGameResult("вы",aiScore,userScore,aiChoose,userChoose));
            continue;
        }else if((aiChoose === rock  && userChoose === scis) || (aiChoose === scis && userChoose === paper) || (aiChoose === paper && userChoose === rock)){
            aiScore++;
            alert(oneGameResult("комп",aiScore,userScore,aiChoose,userChoose));
            continue;
        }
    }
    if(userScore > aiScore){
        alert(`ИГРА ОКОНЧЕНА
        Вы победили
        Счет - ${userScore}:${aiScore}`)
    } else{
        alert(`ИГРА ОКОНЧЕНА
        Вы проиграли
        Счет - ${userScore}:${aiScore}`)
    }
    startNewGame();
}
startGame();