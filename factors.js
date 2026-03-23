function factors(n){
    let i = 1;
    let arr = [];
    while(i<=n){
        if(n % i === 0){
            arr.push(i);
        }
        i++;
    }
    return arr;
}

console.log(factors(16));