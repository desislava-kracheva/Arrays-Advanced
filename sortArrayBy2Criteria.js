function solve(arr){
arr = arr.sort((a,b) => a-b);
let result = [];
console.log(arr);

let firstArr = arr.splice(0,arr.length/2);
let secondArr = arr.splice(arr.length /2 -2);
secondArr = secondArr.sort((a,b) => b-a)


console.log(firstArr);
console.log(secondArr);

for(let i = 0; i < arr.length; i++){

    if(i% 2 == 0){
        arr.pop()
        arr.push(secondArr[i])
    } else {
arr.shift(firstArr[i])
arr.push(firstArr[i])
    }

}


console.log(arr);
}
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])

//94 1 69 2 63 3 52 18 31 21