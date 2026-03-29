function powerof2(n){
    if(n===0) return false;
    else return((n & (n-1))===0);
}

console.log(powerof2(6));