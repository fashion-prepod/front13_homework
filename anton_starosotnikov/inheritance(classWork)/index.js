// Task 2. Создать класс Device, который имеет параметр isOn (по умолчанию false), метод callSmbd, который принимает имя
// вызываемого абонента и метод switchDevice, который переключает параметр isOn. Позвонить абоненту можно только тогда, когда параметр isOn == true, иначе вывести сообщение, что звонок невозможен. Необходимо также создать классы Smartphone(принимает имя и диагональ экрана(не может быть больше 8)) и Tablet(принимает имя и диагональ экрана (не может быть меньше 8)), которые наследуют от класса Device.

// class Device {
//     isOn = false;
//     callSmbd(name) {
//         console.log(this.isOn ? `You call ${name}` : `The call is not possible turn on the device`);
//     }
//     switchDevice() {
//         this.isOn = !this.isOn;
//     }
// }

// class Smartphone extends Device {
//     constructor(deviceName, screenDiagonal) {
//         super();
//         this.deviceName = deviceName;
//         if (screenDiagonal <= 8) {
//             this.screenDiagonal = screenDiagonal;
//         } else {
//             this.screenDiagonal = null;
//             console.log(`The ${this.deviceName} cant have such a diagonal`);
//         }
//     }
// }

// const iphone = new Smartphone('iphoneSE', 5);
// console.log(iphone);
// iphone.callSmbd('Harry');

// class Tablet extends Device {
//     constructor(deviceName, screenDiagonal) {
//         super();
//         this.deviceName = deviceName;
//         if (screenDiagonal > 8) {
//             this.screenDiagonal = screenDiagonal;
//         } else {
//             this.screenDiagonal = null;
//             console.log(`The ${this.deviceName} cant have such a diagonal`);
//         }
//     }
// }

// const ipad = new Tablet('Ipad', 10);
// ipad.switchDevice();
// ipad.callSmbd('Harry');
// console.log(ipad);


// Task 3 Создать класс arrCommander, конструктор которого принимает массив чисел. Конструктор должен создавать
// метод getBiggerArr(), который принимает число и возвращает массив, где каждый элемент увеличен на это число и метод getCurrentArr(), который возвращает текущий массив.

// class arrCommander {
//     constructor(arrNum) {
//         this.getBiggerArr = (userNumber) => arrNum.map(num => num + userNumber);
//         this.getCurrentArr = () => arrNum;
//     }
// }
// const arrNumbers = new arrCommander([1, 5, 4, -1, 0, 100]);
// console.log(arrNumbers.getBiggerArr(5));
// console.log(arrNumbers.getCurrentArr());

// Task 4 Напишите функцию, которая вычисляет длину линий в стандартной двухмерной системе координат. Координаты начала и конца линий должны храниться в объектах.
//  Создайте три линии.
//  Вычислите их длины с помощью функции
//  Проверьте, могут ли три линии сформировать треугольник
// Помните:
// Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать треугольник если длина каждой стороны треугольника должны быть меньше суммы длин остальных сторон.