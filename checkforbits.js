function checkforbits(n){
    let count = 0;
    for(let i = 0;i < 64;i++){
        let result = n << i;
        if((result & n) !== 0){
            count++;
        }
    }
    console.log(`1's in ${n} are ${count}`);
}

checkforbits(-1);
