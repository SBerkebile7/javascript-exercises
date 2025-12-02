const getDeath = function(birth, death) {
    if(!death) {
        death = new Date().getFullYear();
    }
    return (death - birth);
};

const findTheOldest = function(people) {
    return people.reduce(function (a, b) {
        const firstPerson = getDeath(a.yearOfBirth, a.yearOfDeath);
        const secondPerson = getDeath(b.yearOfBirth, b.yearOfDeath);

        return firstPerson < secondPerson ? b : a;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
