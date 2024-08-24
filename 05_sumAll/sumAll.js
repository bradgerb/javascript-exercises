const sumAll = function(start, end) {

    let answer = 0;
    let store = 0;

    for (i = 0; i < 1; i++){
        if (arguments[i] < 0 || Number.isInteger(arguments[i]) === false || typeof start != "number" || typeof end != "number"){
            return "ERROR"
        }
    }

    if (start > end){
        store = start;
        start = end;
        end = store;
    }

    for (i = start; i <= end; i++){
        answer = answer + i;
    }

    return answer

};

// Do not edit below this line
module.exports = sumAll;
