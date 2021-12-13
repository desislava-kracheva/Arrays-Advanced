function solveForSecondTime(arr) {
    let numbers = arr.shift().split(' ').map(Number);
   
    for(let i = 0; i< arr.length; i++){
    let [command, firstArg, secondArg] = arr.shift();

    switch (command) {
        case 'Add':numbers.push(firstArg);
            break;
        case 'Remove':
            let i = numbers.indexOf(firstArg);
            numbers = numbers.splice(i,1);
            break;
        case 'RemoveAt':
            numbers= numbers.splice(firstArg,1)
            break;
        case 'Insert':numbers = numbers.splice(firstArg,1,secondArg)
            break;


    
    }

}
    
console.log(numbers.join(' '));
}

solveForSecondTime(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)