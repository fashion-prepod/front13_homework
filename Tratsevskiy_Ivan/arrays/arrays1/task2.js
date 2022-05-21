const array=[-4,0,6,14,2,8,-8,5,3,0]
//Можно ли сделать это задание через filter или как-то иначе и короче через функцию?
//Просто я так понимаю через цикл это такое себе решение
function calcArifm(arr){
    let sum=0;
    let amount=0;
    for (i = 1; i < arr.length; i++) {
        if((i+1)%2===0){
            sum+=arr[i];
            amount++;
        }
    }
    return sum/amount;
}
console.log(calcArifm(array))