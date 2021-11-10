function solve(arr){


    let guestsArr = [];
    for(let i = 0; i < arr.length; i++){

let sentance = arr[i].split(' ');

if(sentance.length === 3){

    if(!guestsArr.includes(sentance[0])){

guestsArr.push(sentance[0]) ;} else {

console.log(`${sentance[0]} is already in the list!`);
}
    

} else {

    if(guestsArr.includes(sentance[0])){

        let index = guestsArr.indexOf(sentance[0]);
        guestsArr.splice(index,1);
    }else {

        console.log(`${sentance[0]} is not in the list!`);
    
    }

}
    }


console.log(guestsArr.join('\n'));
}

solve(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']


)