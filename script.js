// buat scramble acak#logika sendiri
document.getElementById("scram1","scram2","scram3","scram4").onclick = function(){scramble()}
function scramble(){
    document.getElementById("scram1").innerHTML = document.getElementById("scram2").innerHTML ;
    document.getElementById("scram2").innerHTML = document.getElementById("scram3").innerHTML ;
    document.getElementById("scram3").innerHTML = document.getElementById("scram4").innerHTML ;
    document.getElementById("scram4").innerHTML = document.getElementById("scram1").innerHTML ;
}
// buat timer #tutorial + logikasendiri
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
//function mengubah num ke string
function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }

  let startTime;
  let elapsedTime = 0;
  let timerInterval;
  //function tombol start
  function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      document.getElementById("time").innerHTML = timeToString(elapsedTime);
    }, 10);
    showButton("STOP");
  }
  //function tombol stop
  function stop() {
    clearInterval(timerInterval);
    alert("your latest time = "+ document.getElementById("time").innerHTML);
  }
  //function tombol reset
  function reset() {
    clearInterval(timerInterval);
    document.getElementById("time").innerHTML = "00:00:00";
    elapsedTime = 0;
    showButton("START");
    scramble()
  }
  
  function showButton(buttonKey) {
    const buttonToShow = buttonKey === "START" ? startButton : stopButton;
    const buttonToHide = buttonKey === "START" ? stopButton : startButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
  }
  
  startButton.addEventListener("click", start);
  stopButton.addEventListener("click", stop);
  resetButton.addEventListener("click", reset);