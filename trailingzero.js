function check(num){
    let count = 0;
    while(num>0){
        num = Math.floor(num / 5);
        count += num;
    }
    return count;
}

console.log(check(125));