const calcSum = function () {
    let result = 0;

    return function (num) {

        return result = result + num;
    };
};
const calc = calcSum();


const createCounter = function (start, step) {
    let counter = start;

    return function (reset) {
        if (reset === 'resetCounter') {
            counter = start;
        }

        return counter = counter + step;
    };

};

const fbLikes = createCounter(0, 1);

console.log('Number of likes: ', fbLikes());
console.log('Number of likes: ', fbLikes());
console.log('Number of likes: ', fbLikes());
console.log('Number of likes: ', fbLikes());
console.log('Number of likes: ', fbLikes());
console.log('Number of likes: ', fbLikes());
console.log('Number of likes: ', fbLikes());
console.log('Number of likes: ', fbLikes('resetCounter'));
console.log('Number of likes: ', fbLikes());
console.log('Number of likes: ', fbLikes());
console.log('Number of likes: ', fbLikes());
console.log('Number of likes: ', fbLikes());