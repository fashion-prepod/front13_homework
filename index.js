


// let sum = 0;

// for (let a = 0; ; a++) {
//   let num = prompt("enter numbers");
//   if (num !== null) {
//     num = +num;
//     sum = sum + num;
//   } else {
//     alert("result: " + sum / a);
//     break;
//   }
// }


// for (let a = 0; ; a++) {
//   let num = prompt("enter numbers");
//   if (isNaN(num)) {
//     alert("wrong value");
//   } else if (num === null) {
//     alert("result " + sum / a);
//     break;
//   }
//   num = +num;
//   sum = sum + num;
// }

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

for (a = 0; a < Infinity; a++) {
  let enterNumber = prompt("enter your number N");
  if (!isNaN(enterNumber) && enterNumber !== null && +enterNumber >= 1) {
    enterNumber = +enterNumber;
    let sum = 0;
    for (let i = 1; i <= enterNumber; i++) {
      sum += i;
    }
    alert(`you entered a number ${enterNumber} sum is: ${sum}`);
  } else {
    alert("wrong value enter your number");
  }
}

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
