// 3. Напишите функцию, которая возвращает процент побед и процент
// поражений в контру или доту. Функция принимает два параметра:
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы:
// myStats(352,211), это значит было 352 победы и 211 поражений.
// Функция возвращает сообщение «ваш процент побед - 62%,
// поражений – 38%»

function percentage(wins,loses){
    const all=wins+loses
    const winPerc=(wins/all*100).toFixed(2)
    const losePerc=(loses/all*100).toFixed(2)
    return `Ваш процент побед: ${winPerc}%, поражений: ${losePerc}%`
}
const userWins=+prompt("Введите число побед")
const userLoses=+prompt("Введите число поражений")
alert(percentage(userWins,userLoses))