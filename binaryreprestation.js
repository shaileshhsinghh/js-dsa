function onecomplement(value){
    let result = (~value);
    return result;
}
function twocomplement(value){
    let result = (~value) + 1;
    return result;
}

console.log(`Original        : ${(5).toString(2).padStart(8, '0')}`);
console.log(`One's complement: ${(onecomplement(5) >>> 0).toString(2).padStart(8, '0')}`);
console.log(`Two's complement: ${(twocomplement(5) >>> 0).toString(2).padStart(8, '0')}`);
