// Task 2. Создать класс Device, который имеет параметр isOn (по умолчанию false),
// вызываемого абонента и метод switchDevice, который переключает параметр isOn. Позвонить абоненту можно только тогда, когда параметр isOn == true, иначе вывести сообщение, что звонок невозможен.

// .diagonal = ???;
// Необходимо также создать классы Smartphone(принимает имя и диагональ экрана(не может быть больше 8))
// метод callSmbd, который принимает имя

//  и Tablet(принимает имя и диагональ экрана (не может быть меньше 8)), которые наследуют от класса Device.
// .watchMovies(movieName)

// class Device {
//     #isOn = false;
//     switchDevice() {
//         this.#isOn = !this.#isOn;
//     }
//     get isOn() {
//         return this.#isOn;
//     }
// }

// class ScreenDiagonalError extends Error {};

// class Smartphone extends Device {
//     constructor(deviceName, screenDiagonal) {
//         super();
//         this.deviceName = deviceName;
//         if (screenDiagonal <= 8) {
//             this.screenDiagonal = screenDiagonal;
//         } else {
//             throw new ScreenDiagonalError(`This diagonal (${screenDiagonal} inch) cannot be used when creating this ${deviceName}`);
//         }
//     }
//     callSmbd(name) {
//         console.log(this.isOn ? `You calling ${name}` : `The call is not possible turn on the device`);
//     }
// }

// const iphone = new Smartphone('iphone', 5);
// iphone.switchDevice();
// iphone.callSmbd('Harry');

// class Tablet extends Device {
//     constructor(deviceName, screenDiagonal) {
//         super();
//         this.deviceName = deviceName;
//         if (screenDiagonal > 8) {
//             this.screenDiagonal = screenDiagonal;
//         } else {
//             throw new ScreenDiagonalError(`This diagonal (${screenDiagonal} inch) cannot be used when creating this ${deviceName}`);
//         }
//     }
//     watchMovies(movieName) {
//         console.log(this.isOn ? `You watching ${movieName}` : `Video playback is not possible, turn on the device`);
//     }
// }

// const ipad = new Tablet('Ipad', 10);
// let lenovo;
// ipad.switchDevice();
// ipad.watchMovies('Interstellar');

// try {
//     lenovo = new Tablet('Lenovo', 1);
// } catch (error) {
//     if (error instanceof ScreenDiagonalError) {
//         lenovo = new Tablet('Lenovo', 12)
//     } else {
//         throw error;
//     }
// }


// Task 3 Создать класс arrCommander, конструктор которого принимает массив чисел. Конструктор должен создавать
// метод getBiggerArr(), который принимает число и возвращает массив, где каждый элемент увеличен на это число и метод getCurrentArr(), который возвращает текущий массив.

// class arrCommander {
//     constructor(arrNum) {
//         this.getBiggerArr = userNumber => arrNum.map(num => num + userNumber);
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

// function calcLengthOfLines(arrLines) {
//     return arrLineLengths = arrLines.map(line => {
//         let katetOne = Math.abs(line.start.x - line.end.x);
//         let katetTwo = Math.abs(line.start.y - line.end.y);
//         return +Math.sqrt(katetOne**2 + katetTwo**2).toFixed(1);
//     });  
// }
// const lines = [
//     {
//         start: {x: 1, y: 5},
//         end: {x: 6, y: 2},
//     },
//     {
//         start: {x: 2, y: 1},
//         end: {x: 0, y: 5},
//     },
//     {
//         start: {x: 3, y: 3},
//         end: {x: 5, y: 2},
//     },
// ]
// const resArrOfLines = calcLengthOfLines(lines);
// console.log(resArrOfLines)
// function isTriangleOfLines(resArrOfLines) {
//     let sumOfLineLength = resArrOfLines.reduce((acc, num) => {
//         return acc + num;
//     }, 0);
//     if (resArrOfLines.every(lineLength => lineLength < (sumOfLineLength - lineLength))) {
//         console.log('Линии могут cформировать треугольник');
//     } else {
//         console.log('Линии не могут сформировать треугольник');
//     }
// }
// isTriangleOfLines(resArrOfLines);