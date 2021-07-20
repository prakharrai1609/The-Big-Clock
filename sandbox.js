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




