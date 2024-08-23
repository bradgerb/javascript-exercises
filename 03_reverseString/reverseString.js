const reverseString = function(text) {

    let length = text.length;
    let answer = "";

    for (i = length-1; i >= 0; i--){
        answer = answer + text.charAt(i);
    }

    return answer;

};

// Do not edit below this line
module.exports = reverseString;
