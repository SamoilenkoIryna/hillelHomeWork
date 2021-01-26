function palindrome(num, count = 0) {
    const reversNum = getNum(num)
    if (num === reversNum) {
        return { result: num, step: count, }
    } else {
        try {
            num += reversNum;
            return palindrome(num, ++count);
        } catch (e) {
            console.log(e);
        }
    }
}
function getNum(num) {
    let strNum = String(num);
    return +strNum.split('').reverse().join('');
}

console.log(palindrome(96));