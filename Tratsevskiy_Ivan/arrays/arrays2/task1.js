const array=[];
array.length=8;
function makeOneZeroOne(arr){
    arr[0]=1
    arr[arr.length-1]=1
    arr.fill(0,1,array.length-1)
    return arr;
}
console.log(makeOneZeroOne(array))