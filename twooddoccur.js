function twoadd(arr){
    let xorAll = 0;
    for(let n of arr){
        xorAll ^= n;
    }

    let bit = xorAll & (-xorAll);

    let x = 0 , y = 0;
    for(n of arr){
        if(n & bit) x ^= n;
        else y ^= n;
    }

    return [x,y];
}

let arr = [1,3,2,4,5,6,6,2,1,3];
console.log(twoadd(arr));