const array=[-4,0,6,14,2,8,-8,5,3,0]
const sumArr = array.reduce(function(sum,current){
    sum+=current;
    return sum;
})
console.log(sumArr)