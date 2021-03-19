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
    ]
};
function order(menuName) {
    console.log('Start cooking...');
    const result = [];
    function cooking({ name, time }, ind) {
        let timerId = setTimeout(() => {
            result[ind] = { [name]: 'is cooked' };
            console.log(name, ' is cooked in ', time, 'ms.');
            if (timerId === 1) {
                console.log('All is cooked:', result);
            }
        }, time);
    };
    menuName.forEach(cooking);
};
order(menu.burger);