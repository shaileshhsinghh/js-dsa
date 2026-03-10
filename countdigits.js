function countdigits(sum){
    var count = 0;
    while(sum!==0){
        count++;
        sum = Math.floor(sum / 10);
    }
    return count;
}
console.log(countdigits(8797021982));