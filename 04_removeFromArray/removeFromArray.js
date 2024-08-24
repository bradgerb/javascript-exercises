const removeFromArray = function(arrayIn) {

    let arrayLength = arrayIn.length;
    let argumentLength = arguments.length;

    for (i = 0; i < arrayLength; i++){
        for (n = 1; n < argumentLength; n++){
            if (arrayIn[i] === arguments[n]){
                deletedValue = arrayIn.splice(i, 1);
                i--;
            }
        }
    }

    return arrayIn

};

// Do not edit below this line
module.exports = removeFromArray;
