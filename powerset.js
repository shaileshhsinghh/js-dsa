function powerset(arr){
    let n = arr.length;
    let total = 1<<n; //formula for powerset is 2 to the power n

    for(let i = 0;i < total;i++){
        let subset = [];
        for(let j = 0;j<n;j++){
            if(i&(1<<j)){
                subset.push(arr[j]);
            }
        }
        console.log(subset);
    }
}

powerset([1,2,3]);