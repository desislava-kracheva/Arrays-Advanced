function solveForSecondTime(n,k){

    function solve(n,k){

        let arr = [1]
        for(let i = 1; i < n; i++){
    
    let lastK = arr.slice(-k)
    
    let sum = 0;
    
    for(let num of lastK){
    
    sum += num;
    
    }
    
    arr.push(sum);
    
    
        }
    
        console.log(arr.join(' '));
    }
    
    solve(6, 3)

}
solveForSecondTime(6, 3)