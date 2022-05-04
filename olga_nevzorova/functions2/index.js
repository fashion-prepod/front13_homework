// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

function toogleMe() {
    let boolean = true;
    return function () {
        boolean = !boolean;
        return boolean;
    }
}
const result = toogleMe();
console.log(result());
console.log(result());
console.log(result());