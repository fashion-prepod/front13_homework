// 3. Пользователя спрашивают пароль
// если пароль введен неправильно, спрашивать еще раз
// если правильно вывести "добро пожаловать"
// если отмена вывести "вход отменен"
const truePass = "Gh98_0K";

for(;true;){
    const userPass = prompt("Введиет пароль");
    if(userPass===truePass){
        alert("Добро пожаловать!");
        break;
    } else if(userPass !== truePass || userPass !== null){
        alert("Неверный пароль");
        continue;
    }else{
        alert("Ввод отменен");
        break;
    }
}