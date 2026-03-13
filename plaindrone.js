function rev(num){
    let rev = 0;
    while(num>0){
        let ld = num % 10;
        rev = rev*10 + ld;
        num = Math.floor(num/10);
    }
    return rev;
}

let num = 121;
if(num == rev(num)){
    console.log("palindrone");
}
else{
    console.log("not a plainddrone");
}