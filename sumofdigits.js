function sumofdigits(n,sum=0){
    if(n===0){
        return sum;
    }
    let rem = Math.floor(n% 10);
    sum += rem;
    n = Math.floor(n/10);
    return sumofdigits(n,sum);
}

function sumofdigits1(n){
    if(n === 0) return n;
    return Math.floor(n%10) + sumofdigits1(Math.floor(n/10));
}
console.log(sumofdigits1(1234));