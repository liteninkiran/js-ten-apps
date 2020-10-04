
    const hEl = document.getElementById('header');

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    const dateValue = '1 Jan 2021';
    const dateDescription = 'New Years Eve';

    //const dateValue = '7 August 1981';
    //const dateDescription = 'My Birthday';

    function countDown()
    {
        const date = new Date(dateValue);
        const currentDate = new Date();

        const dateDiff = Math.abs((date - currentDate) / 1000);

        const days = Math.floor(dateDiff / 3600 / 24);
        const hours = Math.floor(dateDiff / 3600) % 24;
        const minutes = Math.floor(dateDiff / 60) % 60;
        const seconds = Math.floor(dateDiff) % 60;

        daysEl.innerHTML = days;
        hoursEl.innerHTML = hours;
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
    }

    function formatTime(time)
    {
        return time < 10 ? (`0${time}`) : time;
    }

    countDown();

    hEl.innerHTML = dateDescription;

    setInterval(countDown, 1000);

