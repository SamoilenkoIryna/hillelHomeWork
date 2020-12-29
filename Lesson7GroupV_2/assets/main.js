let notification = [
    { '21/12/2020': 'some message here 1' },
    { '25/12/2020': 'some message here 2' },
    { '22/12/2020': 'some message here 8' },
    { '23/12/2020': 'some message here 3' },
    { '31/12/2020': 'some message here 4' },
    { '24/12/2020': 'some message here 5' },
    { '22/12/2020': 'some message here 6' },
    { '31/07/2019': 'some message here 7' },
];
let dates = notification.reduce((acc, date) => {
    const strDate = Object.keys(date)[0];
    if (!acc[strDate]) acc[strDate] = [];
    acc[strDate].push(date[strDate]);
    return acc;
}, {});

console.log(dates)