function solveForSecondTime(arr){

    let shift = Number(arr.shift());
    let pop = Number(arr.pop());
    let result = shift + pop;

    console.log(result);

}

solveForSecondTime(['20', '30', '40'])