function checkexpenditure(trans){

    let bill = {};

    for(let{category,price} of trans){
        bill[category]=(bill[category] || 0) + price;
    }

    let result = Object.keys(bill).map(category => ({
        category,
        totalspent : bill[category]
    }));

    return result;
}

const transactions = [
 {id:1, price:10, category:"Food"},
 {id:2, price:20, category:"Travel"},
 {id:3, price:15, category:"Food"}
];

console.log(checkexpenditure(transactions));