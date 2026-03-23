function primefactors(n){
    let i = 2;
    let arr = [];
    while(n>1){
        if(n % i === 0){
            arr.push(i);
            n = n / i;
        }
        else {
            i++;
        }
    }
    return arr;
}

console.log(primefactors(100));