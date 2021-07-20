const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const darkButton = document.getElementById('dark-button');

let hours = 0;
let minutes = 0;
let seconds = 0;
let clock;

function countdown() {
    seconds++;
    if (seconds < 60) {
        if (seconds < 10) {
            sec.textContent = "0" + seconds;
        } else {
            sec.textContent = seconds;
        }
    } else if (seconds == 60) {
        seconds = 0;
        sec.textContent = '0' + seconds;
        minutes++;
        if (minutes < 60) {
            if (minutes < 10) {
                min.textContent = '0' + minutes;
            } else {
                min.textContent = minutes;
            }
        } else if (minutes == 60) {
            minutes = '0' + 0;
            min.textContent = minutes;
            hours++;
            if (hours < 10) {
                min.textContent = '0' + hours;
            } else {
                min.textContent = hours;
            }
            // hour.textContent = hours;
        }
    }

    // console.log(seconds , minutes , hours);
}

start.addEventListener('click', () => {
    clock = setInterval(countdown, 1000);
})

stop.addEventListener('click', () => {
    clearInterval(clock);
})

reset.addEventListener('click', () => {
    clearInterval(clock);
    hours = 0;
    minutes = 0;
    seconds = 0;
    clock;

    sec.textContent = "0" + seconds;
    min.textContent = "0" + minutes;
    hour.textContent = "0" + hours;
})


let checker = 1;

darkButton.addEventListener("click", () => {
        if (checker == 1) {
                document.body.style.backgroundColor = "#444444";
                document.body.style.color = "#EDEDED";
                dark.textContent = "☀";
                checker = 0;
        } else {
                document.body.style.backgroundColor = "#EDEDED";
                document.body.style.color = "#444444";
                dark.textContent = "🌑";
                checker = 1;
        }
})
