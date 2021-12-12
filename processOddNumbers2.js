function solveForSecondTime(arr){
let newArr =[];
    for(let i =0; i<arr.length; i++){
if(i%2 !== 0){
    newArr.push(arr[i])
}

    }

    let result = newArr.map(x => x* 2)
    .reverse()
    .join(' ');
    console.log(result);

}

solveForSecondTime([10, 15, 20, 25])
solveForSecondTime([3, 0, 10, 4, 7, 3])