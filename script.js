const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

function updateClock() {
    const now = new Date();
    
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = (seconds / 60) * 360;
    const minuteDeg = ((minutes + seconds / 60) / 60) * 360;
    const hourDeg = ((hours % 12 + minutes / 60) / 12) * 360;

    secondEl.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    minuteEl.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    hourEl.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
