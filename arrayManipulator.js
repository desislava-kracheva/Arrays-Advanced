// Judge - 18/100
function solve(arr1, arr2) {

    let [command, firstArg, secondArg] = arr2.shift().split(' ');

    while (command !== 'print') {

        if (command === 'add') {
            firstArg = Number(firstArg);
            secondArg = Number(secondArg);
            arr1.splice(firstArg, 0, secondArg);
        } else if (command === 'addMany') {
            


        } else if (command === 'contains') {
            firstArg = Number(firstArg)
            if (arr1.includes(firstArg)) {

                console.log(arr1.indexOf(firstArg));

            }  else {console.log(-1);}


        } else if(command === 'remove'){
firstArg = Number(firstArg);
arr1.splice(firstArg,1);
        } else if(command == 'shift'){


        } else if(command == 'sumPairs'){

        
        }



        [command, firstArg, secondArg] = arr2.shift().split(' ');

    }

    console.log(arr1);
}

solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
)