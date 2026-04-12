function maxCuts(n: number,a:number,b:number,c:number): number{
    //base case : rope cut perfectly used
    if(n === 0) return 0;

    //base case : overcut, invalid path
    if(n<0) return -1;

    //try all cuts
    const res : number = Math.max(maxCuts(n-a,a,b,c),maxCuts(n-b,a,b,c),maxCuts(n-c,a,b,c));

    //if all 3 paths are invalid
    if(res === -1) return -1;

    //count this cut
    return res + 1;
}

// console.log(maxCuts(5,3,2,1));
console.log(maxCuts(23,11,12,14));