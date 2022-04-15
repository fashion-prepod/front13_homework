// 1. Написать функцию, которая принимает число дня недели и возвращает
// его название, если введено число больше 7 или меньше 1 вернуть
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели»



function day(numberDay) {
    switch (+numberDay) {
        case 1:
            return 'monday';
        case 2:
            return 'tuesday';
        case 3:
            return 'wednessday';
        case 4:
            return 'thursday';
        case 5:
            return 'friday';
        case 6:
            return 'saturday';
        case 7:
            return 'sunday';
        default:
            return 'no such day of the week';
    }
}
console.log(day(prompt('enter day of week')));






// 2. Написать функцию, которая возвращает годовую оценку по предмету.
// Функция принимает 4 оценки за четверти и возвращает годовую. В
// начале программы пользователя спршивают оценки за четверти в
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и
// т.д. В конце работы программы выводится сообщение «ваша годовая
// оценка N».



function getYearMark(oneChet, twoChet, threeChet, fourChet) {
    return (oneChet + twoChet + threeChet + fourChet) / 4;
}
let one = +prompt(`enter your first mark`);
let two = +prompt('enter your second mark');
let three = +prompt('enter your third mark');
let four = +prompt('enter your fourth mark');
console.log(`your year mark ${getYearMark(one, two, three, four)}`);






// 3. Напишите функцию, которая возвращает процент побед и процент
// поражений в контру или доту. Функция принимает два параметра:
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы:
// myStats(352,211), это значит было 352 победы и 211 поражений.
// Функция возвращает сообщение «ваш процент побед - 62%,
// поражений – 38%»


function myStats(won, lost) {
    let userWon = Math.round(won * 100 / (won + lost));
    let userLost = Math.round(lost * 100 / (won + lost));
    return `your win rate is ${userWon}%, losses - ${userLost}%`
}
console.log(myStats(352, 211));