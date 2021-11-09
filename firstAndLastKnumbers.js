function solve(arr){
let n = arr.shift();

let arr1 = arr.slice(0,n)
let arr2 = arr.slice(arr.length-n, arr.length);

console.log(arr1.join(' '));
console.log(arr2.join(' '));



}


    solve([3,
        6, 7, 8, 9]
       )