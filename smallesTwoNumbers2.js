function solveForSecondTime(arr){

    let sorted = arr.sort((a,b) => a-b);
    console.log(sorted.splice(0,2).join(' '));

}
solveForSecondTime([30, 15, 50, 5])