var numbers = [1, 2, 3, 4, 15, 89, 80]
var action = numbers => numbers % 2 === 0;

function myFilter(arr, condition) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        condition(arr[i]) && newArr.push(arr[i])
    }
    return newArr;
}

var result = myFilter(numbers, action);

console.log(result);