function solve(arr){
        
        let sorted = arr.sort((a,b) => a.length - b.length);
        let sortedBySecondCriteria = sorted.map(x=>x.toLowerCase()).sort((a,b) => a.localeCompare(b));
        

    console.log(sortedBySecondCriteria);



}

solve(["Isacc", "Theodor", "Jack", "Harrison", "George"])
solve(["alpha", "beta", "gamma"])