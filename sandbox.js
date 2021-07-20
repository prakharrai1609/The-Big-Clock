// const express = require("express");
// const app = express();
const btnStart = document.getElementById('start-clock');
const btnStop = document.getElementById('stop-clock');
const clocker = document.getElementById('clock-buttons');

    let tim = setInterval(time , 1000);
    function time() {
            let date = new Date();
            let time = date.toLocaleTimeString();
            document.getElementById("time").textContent = time;
    }

let check = 1;

dark.addEventListener("click", () => {
        if (check) {
                document.body.style.backgroundColor = "#444444";
                document.body.style.color = "#EDEDED";
                dark.textContent = "☀";
                check--;
        } else {
                document.body.style.backgroundColor = "#EDEDED";
                document.body.style.color = "#444444";
                dark.textContent = "🌑";
                check++;
        }
})


