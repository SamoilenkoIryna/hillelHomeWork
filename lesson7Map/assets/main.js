var numbers = [1, 2, 3, 4, 15, 89, 80]

var multiplyTwo = numbers => numbers * 2;

function myMap(arr, transformation) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(transformation(arr[i]))
    }
    return newArr;
}

var result = myMap(numbers, multiplyTwo);

console.log(result);