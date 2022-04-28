// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

function toggleMe() {
  let value = true;
  return function () {
    if (value === true) {
      console.log(false);
      value = false;
    } else {
      console.log(true);
      value = true;
    }
  };
}
const result = toggleMe();

result();
result();
result();
result();
