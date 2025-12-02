const palindromes = function (string) {

    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const updatedString = string
                        .toLowerCase('')
                        .split('')
                        .filter((character) => alpha.includes(character))
                        .join('');

    const reverseString = updatedString
                        .split('')
                        .reverse('')
                        .join('');

    return updatedString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
