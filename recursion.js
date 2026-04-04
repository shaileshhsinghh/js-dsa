function nto1(n){
    if(n === 0) return;
    console.log(`${n}`);
    nto1(n-1);
}

function onetoN(n){
    if(n===0) return;
    onetoN(n-1);
    console.log(`${n}`);
}

nto1(5);
onetoN(3);