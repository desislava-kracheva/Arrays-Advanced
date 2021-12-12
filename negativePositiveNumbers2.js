function solveForSecondTime(arr){

    let newArr = [];

    for(let line of arr){
if(line< 0){
    newArr.unshift(line);
} else {
    newArr.push(line);
}

    }

    console.log(newArr.join('\n'));

}
solveForSecondTime([7, -2, 8, 9])