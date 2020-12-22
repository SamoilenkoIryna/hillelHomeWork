function pad(name, strLength, symbol, flag) {
    if (strLength < name.length) {
        console.log(name)
    } else {
        var residual = strLength - name.length;
        if (flag === true) {
            console.log(name + symbol.repeat(residual))
        } else {
            console.log(symbol.repeat(residual) + name)
        }
    }
} 

pad('Ivan', 8, '*', false);