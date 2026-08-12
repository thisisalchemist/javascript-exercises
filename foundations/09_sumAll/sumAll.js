const sumAll = function(start, end) {
    let sum = 0;
    if(start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR"
    }
    if(start > end){
        let num = start;
        start = end
        end = num
    }
    while(start <= end){
        sum += start
        start++;
    }
    return sum
};
// Do not edit below this line
module.exports = sumAll;
