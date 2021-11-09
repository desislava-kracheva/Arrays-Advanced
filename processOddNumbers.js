function solve(arr){
let arr1 = [];

for(let i =0; i < arr.length; i++){

    if(i % 2 !== 0){

        arr1.push(arr[i]);
    }
}


let doubled = arr1.map(n => n*2);

console.log(doubled.reverse().join(' '));

}

solve([10, 15, 20, 25])