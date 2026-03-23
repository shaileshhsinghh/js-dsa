function sieveoferatosthenes(n){
    let isPrime = new Array(n+1).fill(true);

    //0 and 1 cannot be prime
    isPrime[0] = isPrime[1] = false;

    for(let i = 2; i*i <= n;i++){
        if(isPrime[i]){
            for(let j = i*i;j<=n;j+=i){
                isPrime[j]=false;
            }
        }
    }

    let prime = [];
    for(let i=2;i<=n;i++){
        if(isPrime[i]===true){
            prime.push(i);
        }
    }
    return prime;
}

console.log(sieveoferatosthenes(20));