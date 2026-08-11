const repeatString = function(str, num) {
    if(num < 0){
        return "ERROR"
    }
    
    let repeatString = '';

    for(let i = 0;i < num; i++){
        repeatString = str + repeatString;
    }
    return repeatString
};

// Do not edit below this line
module.exports = repeatString;
