function solve(arr){
    let arrFromNumbers = arr.shift().split(' ').map(Number);
    
    
    for(let i = 0; i< arr.length; i++){
    
    let token = arr[i].split(' ');
    
    switch(token[0]){
    case'Add':
    
        arrFromNumbers.push(token[1]); break;
    case 'Remove':
     
        arrFromNumbers = arrFromNumbers.filter(el => el!== token[1]); break;
    
      
    case 'RemoveAt':
        arrFromNumbers.splice(token[1],1);break;
    case 'Insert': arrFromNumbers.splice(token[2],0 , token[1]);break;
    }
    
    
        
    }
    
    console.log(arrFromNumbers.join(' '))
    }
    
    solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
    )