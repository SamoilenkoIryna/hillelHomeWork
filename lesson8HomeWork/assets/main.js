var dog =
{
    name: 'Sam',
    color: 'black',
    idCertificate: 'AB9201973619'
};

function myGetValues(object) {
    var newArr = [];
    for (var key in object) {
        newArr.push(object[key]);
    } return newArr;
}



var valueRes = myGetValues(dog);
console.log(valueRes);

function myGetKey(object) {
    var newArr = [];
    for (var key in object) {
        newArr.push(key);
    } return newArr;
}



var keyRes = myGetKey(dog);
console.log(keyRes);

function myGetEntries(object) {
    var arr = [];
    for (var key in object) {
        var newArr = [];
        newArr.push(key, object[key]);
        arr.push(newArr);
    }
    return arr;
}

var entriesRes = myGetEntries(dog);
console.log(entriesRes);