
function setDate() {
    const secondHand = document.querySelector('.local-second-hand')
    const now = new Date();
    const second = now.getSeconds();
    const secondHandMovement = ((second /60) * 360) + 90;
    
    

    secondHand.style.transform = `rotate(${secondHandMovement}deg)`;

    const minuteHand = document.querySelector('.local-minute-hand');
    const minute = now.getMinutes();
    const minuteHandMovement = ((minute / 60) * 360) + ((second /60) * 6) + 90;

    minuteHand.style.transform = `rotate(${minuteHandMovement}deg)`;

    const hourHand = document.querySelector('.local-hour-hand');
    const hour = now.getHours();
    const hourHandMovement = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
    const timeDifference = now.getTimezoneOffset() / 60;
    const gmt = (hour + timeDifference)
    hourHand.style.transform = `rotate(${hourHandMovement}deg)`
};
setInterval(setDate, 1000);