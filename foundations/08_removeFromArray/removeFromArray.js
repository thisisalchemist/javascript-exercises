const removeFromArray = function(...theArgs) {
    for(let i = 1; i <= arguments.length; i++){
        while(arguments[0].includes(arguments[i])){
            let removeIndex = arguments[0].indexOf(arguments[i])
            arguments[0].splice(removeIndex,1)
        }
    }
    return arguments[0]
};

// Do not edit below this line
module.exports = removeFromArray;
