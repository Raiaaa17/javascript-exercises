const palindromes = function (pal) {
    pal = pal.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, '');
    pal = pal.toLowerCase()

    res = ''
    for (chr of pal) {
        res = chr + res;
    };

    return pal === res

};

// Do not edit below this line
module.exports = palindromes;
