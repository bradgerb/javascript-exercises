const date = new Date();
let year = date.getFullYear();

const findTheOldest = function(listOfPeople) {
    
    const sortedAges = listOfPeople.sort(function(a, b){
        if (!a.yearOfDeath){
            a.yearOfDeath = year;
        };
        if (!b.yearOfDeath){
            b.yearOfDeath = year;
        }
        const ageA = a.yearOfDeath-a.yearOfBirth;
        const ageB = b.yearOfDeath-b.yearOfBirth;
        if (ageA > ageB){
            return -1
        }else{
            return 1
        };
    });

    return (sortedAges[0])

};

// Do not edit below this line
module.exports = findTheOldest;
