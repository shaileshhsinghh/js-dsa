function powerset(arr){
    let n = arr.length;//for formula
    let total = 1<<n; //formula for powerset is 2 to the power n

    for(let i = 0;i < total;i++){ //for 2 to the power n numbers
        let subset = [];
        for(let j = 0;j<n;j++){ // for each n number
            if(i&(1<<j)){ //checks for set bit of number n
                subset.push(arr[j]);
            }
        }
        console.log(subset);
    }
}

powerset([1,2,3]);