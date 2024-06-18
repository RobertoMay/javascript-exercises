const repeatString = function(string, number) {
    let finalString = '';
    for (let index = 0; index < number; index++) {
        finalString = finalString +  string;
    }

    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
