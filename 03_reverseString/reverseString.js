const reverseString = function(sentence) {
    const sentenceArray = sentence.split("")
    let res = []
    for (chr of sentenceArray) {
        res.unshift(chr)
    }
    return res.join("")
};

// Do not edit below this line
module.exports = reverseString;
