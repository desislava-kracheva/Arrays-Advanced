function solve(arr1, arr2){

    [first, second, third] = arr2;

    let changed = arr1.splice(0,first);
    changed.splice(0,second);
let counter = 0;
    

    for(let line of changed){

        if(line === third){

            counter++;
        }
    }

    console.log(`Number ${third} occurs ${counter} times.`);
}

solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )