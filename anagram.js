function isanagram(str1, str2){
    let freq = {};

    for(let char of str1){
        freq[char] = (freq[char] || 0) + 1;
    }

    for(let char of str2){
        if(!freq[char]) return false;
        freq[char]--;
    }

    return true;
}
console.log(isanagram("openai" , "aiopen"));
console.log(isanagram("listen is","silent is"));
