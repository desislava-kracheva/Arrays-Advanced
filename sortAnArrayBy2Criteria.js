function solve(arr){

    let result =  arr.slice(0).sort((a,b)=>{
    if(a.length === b.length){
    
    return a.localeCompare(b); 
    
    }
    else{
    
        return a.length - b.length
    }
    }
    );
    return result.join('\n')
    
    
    
    }
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"])
solve(["alpha", "beta", "gamma"])