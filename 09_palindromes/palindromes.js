const palindromes = function (text) {
    const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedText = cleanedText.split('').reverse().join('');

    return cleanedText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
