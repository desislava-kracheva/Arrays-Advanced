function solveForSecondTime(arr){
let set = new Set(arr)

let arrayFromSet = Array.from(set);
console.log(arrayFromSet.join(' '));

}

solveForSecondTime([7, 8, 9, 7, 2, 3, 4, 1, 2])