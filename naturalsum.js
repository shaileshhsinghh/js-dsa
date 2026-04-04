function naturalsum(n){
    if(n === 0) return 0;
    return n + naturalsum(n-1);
}

console.log(naturalsum(5));