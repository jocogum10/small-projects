// selectors
let timerId = '';
let timeSeconds = 0;
let timeFinal = 0;
let timeElement = document.getElementById("time");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");


// event listeners
startButton.addEventListener("click", startTime);
stopButton.addEventListener("click", stopTime);
resetButton.addEventListener("click", resetTime);


// functions
function startTime(){
    console.log("start");
    if(timerId === ''){
        timerId = setInterval(incrementTimer, 1000);
    }
    startButton.setAttribute("disabled", true);
    stopButton.removeAttribute("disabled");
    resetButton.removeAttribute("disabled");
    
}
function stopTime(){
    console.log("stop");
    clearInterval(timerId);
    timerId = '';
    startButton.removeAttribute("disabled");
    stopButton.setAttribute("disabled", true);
    resetButton.removeAttribute("disabled");
}
function resetTime(){
    console.log("reset");
    stopTime();
    timeSeconds = 0;
    updateDisplay();
    startButton.removeAttribute("disabled");
    stopButton.setAttribute("disabled", true);
    resetButton.setAttribute("disabled", true);
}

function incrementTimer(){
    timeSeconds++;
    updateDisplay();
}

function updateDisplay(){
    timeFinal = new Date(timeSeconds * 1000).toISOString().substr(11, 8);;
    timeElement.innerText = timeFinal;
}