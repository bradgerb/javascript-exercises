const fibonacci = function(num) {
    let answer = 0;
    let previousOne = 1;
    let previousTwo = 0;

    parseInt(num, 10);

    if (num === 0){
        return 0
    }else if (num == 1){
        return 1
    } else if(num < 0){
        return "OOPS"
    } else{
        for (i = 0; i < num-1; i++){
            answer = previousOne + previousTwo;
            previousTwo = previousOne;
            previousOne = answer;
        };
    };
    return answer
};

// Do not edit below this line
module.exports = fibonacci;
