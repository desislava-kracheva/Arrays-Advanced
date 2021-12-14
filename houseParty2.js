function solveForSecondTime(arr){

let newArr = [];

for(let line of arr){

let tokens = line.split(' ');

if(tokens.length == 3){
if(!newArr.includes(tokens[0])){

    newArr.push(tokens[0]);
}else {

    console.log(`${tokens[0]} is already in the list!`);
}
} else if(tokens.length == 4) {

    if(!newArr.includes(tokens[0])){
        console.log(`${tokens[0]} is not in the list!`);
 
    } else {
let i = newArr.indexOf(tokens[0])
        newArr.splice(i,1
            )
    }



}
}
console.log(newArr.join('\n'));

}

solveForSecondTime(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']




)