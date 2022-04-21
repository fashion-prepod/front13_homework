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

function getUserValue(message) {
  let userValue;
  for (;;) {
    userValue = prompt(message);
    if (userValue === null) {
      alert("Lets play later Bye");
      return userValue;
    } else if (
      userValue === "stone" ||
      userValue === "scissors" ||
      userValue === "paper"
    ) {
      return userValue;
    } else {
      alert("enter incorrect value");
    }
  }
}

function getCompValue(MathRound) {
  const compValue = {
    0: "stone",
    1: "scissors",
    2: "paper",
  };
  return compValue[MathRound];
}

function startGame() {
  let sumWinUser = 0;
  let sumWinComp = 0;

  for (;;) {
    const totalCompValue = getCompValue(Math.round(Math.random() * 2));
    const totalUserValue = getUserValue(
      'enter your value: "stone", "scissors", "paper";'
    );
    if (totalUserValue === null) {
      return;
    }
    if (totalUserValue === totalCompValue) {
      alert("Draw!");
    } else {
    }
    if (totalUserValue === "stone" && totalCompValue === "paper") {
      alert(`computer chose a paper you lose ${sumWinUser}:${++sumWinComp}`);
    } else {
    }
    if (totalUserValue === "paper" && totalCompValue === "stone") {
      alert(`computer chose a stone you wine ${++sumWinUser}:${sumWinComp}`);
    } else {
    }
    if (totalUserValue === "stone" && totalCompValue === "scissors") {
      alert(`computer chose a scissors you wine ${++sumWinUser}:${sumWinComp}`);
    } else {
    }
    if (totalUserValue === "scissors" && totalCompValue === "stone") {
      alert(`computer chose a stone you lose ${sumWinUser}:${++sumWinComp}`);
    } else {
    }
    if (totalUserValue === "scissors" && totalCompValue === "paper") {
      alert(`computer chose a paper you win ${++sumWinUser}:${sumWinComp}`);
    } else {
    }
    if (totalUserValue === "paper" && totalCompValue === "scissors") {
      alert(`computer chose a scissors you lose ${sumWinUser}:${++sumWinComp}`);
    }
    if (+sumWinUser === 10) {
      alert("Сongratulations you won!!!");
      return startGame();
    } else if (+sumWinComp === 10) {
      alert("Сomputer won try again :(!!!");
      return startGame();
    }
  }
}
startGame();


