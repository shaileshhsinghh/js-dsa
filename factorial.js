function factorial(num){
    let fact =1;
    while(num > 0){
        fact = num * fact;
        num--;
    }
    return fact;
}

console.log(factorial(5));