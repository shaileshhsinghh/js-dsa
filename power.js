function power(x,y){
    if(y === 0){
        return 1;
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

module.exports = power;