function solve(arr){


let sorted = arr.slice(0).sort((a,b) => b-a);

let newArr = [];

while(sorted.length!== 0){

newArr.push(sorted.shift());
newArr.push(sorted.pop())

}
console.log(newArr.join(' '));

}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])