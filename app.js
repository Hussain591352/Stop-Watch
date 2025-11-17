let hours = 0, minutes = 0, seconds = 0;
let interval = null;

const hourBox = document.getElementById("hours");
const minuteBox = document.getElementById("minutes");
const secondBox = document.getElementById("seconds");
const lapList = document.getElementById("lapList");

function updateDisplay() {
    hourBox.innerText = hours < 10 ? "0" + hours : hours;
    minuteBox.innerText = minutes < 10 ? "0" + minutes : minutes;
    secondBox.innerText = seconds < 10 ? "0" + seconds : seconds;
}

function runTimer() {
    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

document.getElementById("start").onclick = () => {
    if (interval !== null) return;
    interval = setInterval(runTimer, 1000);
};

document.getElementById("stop").onclick = () => {
    clearInterval(interval);
    interval = null;
};

document.getElementById("reset").onclick = () => {
    clearInterval(interval);
    interval = null;
    hours = minutes = seconds = 0;
    updateDisplay();
    lapList.innerHTML = "";
};

document.getElementById("lap").onclick = () => {
    let lapTime = `${hourBox.innerText}:${minuteBox.innerText}:${secondBox.innerText}`;
    let li = document.createElement("li");
    li.innerText = lapTime;
    lapList.appendChild(li);
};

// Update display at start
updateDisplay();

