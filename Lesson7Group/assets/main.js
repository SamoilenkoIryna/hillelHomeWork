let notification = [
    {date: '31/07/2019', msg: 'some msg for 31/07/2019'},
    {date: '09/05/2020', msg: 'some msg for 09/05/2020'},
    {date: '15/07/2020', msg: 'some msg for 15/07/2020'},
    {date: '31/07/2019', msg: 'some msg for 31/07/2019'}];

    let dates = notification.reduce((dates, messages) => {
    let date = messages.date;
    if (!dates[date]) {
        dates[date] = [];
    }
    dates[date].push(messages);
    return dates;
},
    {});

    let groupArrays = Object.keys(dates).map((date) => {
        return {
          date,
          msg: dates[date]
        };
      });
      
      console.log(groupArrays);