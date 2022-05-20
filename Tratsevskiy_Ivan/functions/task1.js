// 1. Написать функцию, которая принимает число дня недели и возвращает
// его название, если введено число больше 7 или меньше 1 вернуть
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели»

function dayOfWeek(dayNumber){
    switch(dayNumber){
        case 1:
            alert("Понедельник")
            break
        case 2:
            alert("Вторник")
            break
        case 3:
            alert("Среда")
            break
        case 4:
            alert("Четверг")
            break
        case 5:
            alert("Пятница")
            break
        case 6:
            alert("Суббота")
            break
        case 7:
            alert("Воскресенье")
            break
        default:
            alert("Такого дня недели не существует")
    }
}
const userDay =+prompt("Введите номер дня недели")
dayOfWeek(userDay)