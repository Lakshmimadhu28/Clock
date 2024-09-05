let sec = document.getElementById("sec");
let min = document.getElementById("min");
let hour = document.getElementById("hour");

function clock() {
    let dt = new Date();
    
    let second = dt.getSeconds() + (dt.getMinutes() * 60);
    let minutes = dt.getMinutes();
    let hours = dt.getHours();

    sec.style.transform = `rotate(${360 * (second / 60)}deg)`;
    min.style.transform = `rotate(${360 * (minutes / 59)}deg)`;
    hour.style.transform = `rotate(${360 * (hours / 12)}deg)`;
}

setInterval(clock, 1000);
