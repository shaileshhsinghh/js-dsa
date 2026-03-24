function power(x,y){
    if(y === 0){
        return 1;
    }
    else if(y === 1){
        return x;
    }
    else {
        let result = 1;
        while(y > 0){
            result = result*x ;
            y--;
        }
        return result;
    }
}

console.log(power(2,3));