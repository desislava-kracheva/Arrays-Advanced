function solveForSecondTime(arr){

    let wagons = arr.shift().split(' ').map(Number);
    
    let maxPassangers = Number(arr.shift());
    
    for (let i = 0; i<arr.length; i++) {
      let isAdd = arr[i].split(' ').includes('Add');
    
    if(isAdd){
    
    let newWagon = arr[i].split(' ')[1];
    
    wagons.push(newWagon);
    }
    
    
        
    else {
    
    let n = Number(arr[i]);
    
    for (let j = 0; j< wagons.length; j++) {
        
        if((wagons[j] + n) <= maxPassangers){
    
    wagons[j] += n;
    break;
    
        
    }
    
    
    }
    
    
    }
    
    }
    console.log( wagons.join(' '));
    
    }
    
    solveForSecondTime(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
    )