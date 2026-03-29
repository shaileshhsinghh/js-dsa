function oneoddocurring(n){
    let result = 0;
    for(let i of n){
        result ^= i;
    }
    return result;
}

console.log(oneoddocurring([1,2,5,3,1,4,2,3,4]));