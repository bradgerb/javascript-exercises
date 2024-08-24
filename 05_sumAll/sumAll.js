const sumAll = function(start, end) {

    let answer = 0;
    let store = 0;

    if (start < 0 || end < 0){
        return "ERROR"
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
