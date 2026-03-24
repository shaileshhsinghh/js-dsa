function binary(x,y){
    let result = 1;
    while(y>0){
        if(y%2!==0){
            result = result * x;
        }
        x = x * x;
        y = Math.floor(y / 2);
    }
    return result;
}

console.log(binary(4,5));