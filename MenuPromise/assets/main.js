const menu = {
    burger: [
        {
            name: '🍔',
            time: 3000
        },
        {
            name: '🍟',
            time: 750
        },
        {
            name: '🥤',
            time: 500
        },
    ],
    hotDog: [
        {
            name: '🌭',
            time: 2000
        },
        {
            name: '🍺',
            time: 500
        },
    ],
    pizza: [
        {
            name: '🍕',
            time: 2500
        },
        {
            name: '🥃',
            time: 250
        },
    ],
    dessert: [
        {
            name: '🍰',
            time: 2500
        },
        {
            name: '🍵',
            time: 250
        },
    ],
    sushi: [
        {
            name: '🍣',
            time: 2500
        },
        {
            name: '🥡',
            time: 250
        },
    ],
};

const order = (menu) => {

    const cookFood = (name, time) => {
       return new Promise((resolve, reject) => {
            const condition = +Math.random().toFixed();

            setTimeout(() => {
                condition ? resolve(name) : reject(name);
            }, time);
        });
    }
    return Promise.allSettled(Object.entries(menu).map(cookFood));
};

order(menu).then(result => {
    const orderResult = result.filter(({status}) => status === "fulfilled")
    const orderLResultLength = orderResult.length > 2;
    orderLResultLength ? console.log(orderResult) : console.log('WTF');
})