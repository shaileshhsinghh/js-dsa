function palindrome(Original,rev = 0){
    if(Original === 0) return rev;
    let rem = Math.floor(Original % 10);
    rev = rev * 10 + rem;
    Original = Math.floor(Original / 10);
    return palindrome(Original,rev);
}

let input = 121;
console.log(input === palindrome(input));
