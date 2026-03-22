const gcd = require("./gcd");

function lcm(a,b){
return a*b / gcd(a,b);
}

console.log(lcm(12,8));