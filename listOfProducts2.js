function solveForSecondTime(arr){

//let sorted = arr.sort((a,b) => a.localeCompare(b));
let sorted = arr.sort();
for(let i = 0; i< sorted.length; i++){

    console.log(`${i+1}.${sorted[i]}`);
}


}
solveForSecondTime(["Potatoes", "Tomatoes", "Onions", "Apples"])