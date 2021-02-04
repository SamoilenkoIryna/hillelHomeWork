function reverseString(string) {
    if (string.length === 0) {
        return "";
    } else {
        return string[string.length - 1] + reverseString(string.substring(0, string.length - 1));
    }
}

console.log(reverseString('I like JavaScript'))


function binarySearch(array, value, from, to) {
    if (from <= to) {
        let middle = Math.floor((from + to) / 2);

        if (array[middle] > value) {
            return binarySearch(array, value, from, middle - 1);
        } else if (array[middle] < value) {
            return binarySearch(array, value, middle + 1, to);
        }
        return middle;
    } else {
        return -1;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7]

console.log(binarySearch(arr, 3, -1, arr.length-1))