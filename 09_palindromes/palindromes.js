const palindromes = function (text) {
    
    let length = text.length;
    let answer = "";

    for (i = length-1; i >= 0; i--){
        answer = answer + text.charAt(i);
    }

    if (answer === text){
        return true
    } else{
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
