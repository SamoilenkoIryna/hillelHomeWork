const menu = {
    burger: [
        {
            name: 'burger🍔',
            time: 3000
        },
        {
            name: 'fries🍟',
            time: 750
        },
        {
            name: 'cola🥤',
            time: 500
        },
    ],
    hotDog: [
        {
            name: '🌭hotDog',
            time: 2000
        },
        {
            name: 'beer🍺',
            time: 500
        },
    ],
    pizza: [
        {
            name: 'pizza🍕',
            time: 2500
        },
        {
            name: 'cognac🥃',
            time: 250
        },
    ]
};
const order = (menuItem) => {
    const result = [...menuItem]
    const highestTimeout = Math.max.apply(Math, result.map(item => item.time))
    const cooking = (item) => {
        setTimeout(() => {
            console.log('Start cooking...');

            item.failedToCook = Math.random() < 0.5

            if (item.time === highestTimeout) {
                console.log(result)
            }
        }, item.time)
    }
    result.forEach(item => cooking(item))
}
order(menu.pizza)