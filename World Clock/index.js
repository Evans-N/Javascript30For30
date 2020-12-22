
function setDate() {
    // Adding time in from JS.
    const now = new Date();

    // setting the hand movement for the second hand of the clock face.
    const second = now.getSeconds();
    const secondHandMovement = ((second /60) * 360) + 90;

    // setting the minute hand motions for the clock face. 
    const minute = now.getMinutes();
    const minuteHandMovement = ((minute / 60) * 360) + ((second /60) * 6) + 90;

    // setting the hour hand movement for the clock face.
    const hour = now.getHours();
    const hourHandMovement = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;

    // setting up the logic to calculate time zone differences. 
    const timeDifference = now.getTimezoneOffset() / 60;
    const gmt = (hour + timeDifference)
    let delTime = checkHour(((gmt + 5) > 24) ? ((gmt + 5) - 24) : (gmt + 5));
    let laTime = checkHour(((gmt + (24 - 8)) >= 24) ? ((gmt + (24 - 8)) - 24) : (gmt + (24 - 8)));
    let mdTime = checkHour(((gmt + 1) > 24) ? ((gmt + 1) - 24) : (gmt + 1));

    // This clock face will show local time based off of the running machines time zone. 
    const localSecondHand = document.querySelector('.local-second-hand');
    const localMinuteHand = document.querySelector('.local-minute-hand');
    const localHourHand = document.querySelector('.local-hour-hand');
        localSecondHand.style.transform = `rotate(${secondHandMovement}deg)`;
        localMinuteHand.style.transform = `rotate(${minuteHandMovement}deg)`;
        localHourHand.style.transform = `rotate(${hourHandMovement}deg)`;
    
    const delSecondHand = document.querySelector('.del-second-hand');
    const delMinuteHand = document.querySelector('.del-minute-hand');
    const delHourHand = document.querySelector('.del-hour-hand');
        delSecondHand.style.transform = `rotate(${secondHandMovement}deg)`;
        delMinuteHand.style.transform = `rotate(${minuteHandMovement}deg)`;
        delHourHand.style.transform = `rotate(${delTime}deg)`;

    const laSecondHand = document.querySelector('.la-second-hand');
    const laMinuteHand = document.querySelector('.la-minute-hand');
    const laHourHand = document.querySelector('.la-hour-hand');
        laSecondHand.style.transform = `rotate(${secondHandMovement}deg)`;
        laMinuteHand.style.transform = `rotate(${minuteHandMovement}deg)`;
        laHourHand.style.transform = `rotate(${laTime}deg)`;

    const mdSecondHand = document.querySelector('.md-second-hand');
    const mdMinuteHand = document.querySelector('.md-minute-hand');
    const mdHourHand = document.querySelector('.md-hour-hand');
        mdSecondHand.style.transform = `rotate(${secondHandMovement}deg)`;
        mdMinuteHand.style.transform = `rotate(${minuteHandMovement}deg)`;
        mdHourHand.style.transform = `rotate(${mdTime}deg)`; 
        
    setTimeout("GetTime()", 1000);
};

function getGMT(num){
    return ((num <= 9) ? ('0' + num) : num)
}

function checkHour(hour){
    return(hour <= 24) ? hour - 24 : hour;
}

setInterval(setDate, 1000);