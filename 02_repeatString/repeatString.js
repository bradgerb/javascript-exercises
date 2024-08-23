const repeatString = function(string, num) {
    
    let answer = "";

    for (i = 0; i < num; i++){
        answer = answer + string;
    }

    return answer;
};

// Do not edit below this line
module.exports = repeatString;
