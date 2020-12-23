function pad(name, strLength, symbol, flag) {
    if (strLength < name.length) {
        return(name)
    } else {
        var residual = strLength - name.length;
        if (flag === true) {
            return(name + symbol.repeat(residual))
        } else {
            return(symbol.repeat(residual) + name)
        }
    }
} 

 String(pad('Ivan', 8, '*', false));