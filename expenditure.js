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

module.exports = checkexpenditure;
