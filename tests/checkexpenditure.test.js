const checkexpenditure = require('../expenditure');

test("calculates spending by category", () => {

    const transactions = [
        {price:10, category:"Food"},
        {price:20, category:"Travel"},
        {price:15, category:"Food"}
    ];

    const result = checkexpenditure(transactions);

    expect(result).toEqual([
        {category:"Food", totalSpent:25},
        {category:"Travel", totalSpent:20}
    ]);

});