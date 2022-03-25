

//Task_4
// for (i = 0; i <= 0; i++) {
// let sum = 0;
// for (a = 0; ; a++) {
//   let num = prompt("enter your numbers");
//   if (isNaN(num) || num === "") {
//     alert("wrong value: enter your numbers");
//     break;
//   }
//   if (num !== null) {
//     num = +num;
//     sum += num;
//   } else {
//     alert("result: " + sum / a);
//     break;
//   }
// }
// }



//Task_1

// for (a = 0; a < Infinity; a++) {
//   let enterNumber = prompt("enter your number N");
//   if (!isNaN(enterNumber) && enterNumber !== null && +enterNumber >= 1) {
//     enterNumber = +enterNumber;
//     let sum = 0;
//     for (let i = 1; i <= enterNumber; i++) {
//       sum += i;
//     }
//     alert(`you entered a number ${enterNumber} sum is: ${sum}`);
//   } else {
//     alert("wrong value enter your number");
//   }
// }

//Task_3;
// for (a = 10; a < 100; a++) {
//   if (a % 4 === 0 && a % 6 !== 0) {
//     console.log(a);
//   }
// }

//Task_2

// let numberEnteredUser = prompt("number of entered numbers");
// let enterNumbers = prompt("enter your numbers");

// let enteredZeros = 0;
// let enteredPositiveNumbers = 0;
// let enteredNegativeNumbers = 0;

// for(i=1;i<=numberEnteredUser;){

// }




//Task_5

// for (i = 0; ; i++) {
//   let userNumber = prompt("enter your first number");
//   let userNumber_2 = prompt("enter your second number");
//   let multiplication = prompt("enter multiplication your numbers");
//   if (
//     isNaN(userNumber) ||
//     isNaN(userNumber_2) ||
//     userNumber === "" ||
//     userNumber_2 === "" ||
//     userNumber === null ||
//     userNumber_2 === null
//   ) {
//     alert("enter your numbers");
//     break;
//   }
//   userNumber = +userNumber;
//   userNumber_2 = +userNumber_2;
//   multiplication = +multiplication;
//   if (multiplication !== userNumber * userNumber_2) {
//     multiplication = userNumber * userNumber_2;

//     alert(`result: ${multiplication}`);
//   } else {
//     alert(`Good`);
//   }
// }



//Task_6
// let hamstersAmount = 100;

// for (let attempts = 1; ; attempts++) {
//     let userHamstersAmount = prompt('how many hamsters do u wanna get ?');

//     if (isNaN(userHamstersAmount) || userHamstersAmount === '') {
//         alert('please enter correct number');
//         continue;
//     } else if (userHamstersAmount === null) {
//         alert(`you've cancelled the game`);
//         break;
//     }

//     userHamstersAmount = +userHamstersAmount;
    
//     if (hamstersAmount === userHamstersAmount) {
//         alert(`you got all hamsters in ${attempts} times`);
//         break;
//     } else if (userHamstersAmount > hamstersAmount) {
//         alert('too much, there is no such amount of hamsters');
//     } else {
//         hamstersAmount = hamstersAmount - userHamstersAmount;
//         alert(`you successfully got ${userHamstersAmount} hamsters`);
//     }
// }




//Task_7
// for (a = 0; ; a++) {
//   let userNumberOne = prompt("enter your number N");
//   let userNumberTwo = prompt("enter your number M");
//   if (
//     isNaN(userNumberOne) ||
//     isNaN(userNumberTwo) ||
//     userNumberOne === "" ||
//     userNumberTwo === "" ||
//     userNumberOne === null ||
//     userNumberTwo === null
//   ) {
//     alert("enter your numbers");
//     continue;
//   }
//   userNumberOne = +userNumberOne;
//   userNumberTwo = +userNumberTwo;
//   for (let i = userNumberOne; i <= userNumberTwo; i++) {
//     let multiplication = `${i} * ${i}`;
//     alert(multiplication);
//   }
// }

//Task_8

let userNumber = prompt("enter your number");
for(i=0; i){

}
