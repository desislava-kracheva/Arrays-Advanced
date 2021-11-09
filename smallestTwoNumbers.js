function solve(arr){

let arr1 = arr.sort((a,b) => a-b);

let arr2 = arr1.splice(0,2);
console.log(arr2.join(' '));

}

solve([30, 15, 50, 5])