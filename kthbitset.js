function kthbit(n,p){
    let check = 1 << p ;
    if((check & n) !== 0){
        console.log(`Bit is set on position ${p}`)
    }
    else{
        console.log(`Bit is not set on position ${p}`);
    }
}

kthbit(6,1);