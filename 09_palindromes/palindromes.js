const palindromes = function (text) {
    
    let length = text.length;
    let answer = "";
    let whitelist = "abcdefghijklmnopqrstuvwxyz0123456789"

    text = text.toLowerCase()

    text = text.split("");
    text = text.filter(cleanUp);
        function cleanUp(clean){
            return whitelist.includes(clean);
        }
    text = text.join("");

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
