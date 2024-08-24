const removeFromArray = function(arrayIn, remove) {

    let length = arrayIn.length;
    let answer = [];

    for (i = 0; i < length; i++){
        if (arrayIn.at(i) === remove){
            deletedValue = arrayIn.splice(i, 1);
        }
    }

    return arrayIn

};

// Do not edit below this line
module.exports = removeFromArray;
