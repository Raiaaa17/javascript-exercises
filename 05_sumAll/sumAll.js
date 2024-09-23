const sumAll = function(start, finish) {
    if (start < 0 || finish < 0 || Math.floor(start) !== start || Math.floor(finish) !== finish) return "ERROR"
    if (start > finish) [start, finish] = [finish, start];
    
    let res = 0;
    for (let i = start; i <= finish; i++) {
        res += i;
    };
    return res;
};

// Do not edit below this line
module.exports = sumAll;
