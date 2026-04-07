function palindrome(Original,rev = 0){
    if(Original === 0) return rev;
    let rem = Math.floor(Original % 10);
    rev = rev * 10 + rem;
    Original = Math.floor(Original / 10);
    return palindrome(Original,rev);
}

function palindromeString(n, Original = n) {
    if(n.length <= 1) return Original;                    
    if(n[0] !== n[n.length-1]) return "Not a palindrome"; 
    return palindromeString(n.slice(1, n.length-1), Original);
}

let input = "121";
console.log(input === palindromeString(input));
