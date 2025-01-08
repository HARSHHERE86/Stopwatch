let timer;
let running = false;
let elapsedTime = 0;
let startTime = 0;

function formatTime(ms) {
  let totalSeconds = Math.floor(ms / 1000);
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let milliseconds = Math.floor((ms % 1000) / 10);

  return (
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0") +
    ":" +
    String(milliseconds).padStart(2, "0")
  );
}

function startStop() {
  if (!running) {
    running = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.getElementById("display").textContent = formatTime(elapsedTime);
    }, 10);
  }
}

function stopTimer() {
  running = false;
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

function recordLap() {
  if (running) {
    const lapTime = formatTime(elapsedTime);
    const lapList = document.getElementById("laps");
    const lap = document.createElement("div");
    lap.className = "lap";
    lap.textContent = `Lap: ${lapTime}`;
    lapList.appendChild(lap);
  }
}
function changeTheme() {
    // Toggle between light and dark themes
    const body = document.body;
    const stopwatch = document.querySelector('.stopwatch');
    const themeButton = document.getElementById('themeButton');
  
    if (body.classList.contains('dark')) {
      body.classList.remove('dark');
      body.style.background = 'linear-gradient(135deg, #f4f4f9, #d3d3d3)';
      stopwatch.style.background = 'rgba(0, 0, 0, 0.1)';
      themeButton.textContent = 'Switch to Dark Theme';
    } else {
      body.classList.add('dark');
      body.style.background = 'linear-gradient(135deg, #1e3c72, #2a5298)';
      stopwatch.style.background = 'rgba(255, 255, 255, 0.1)';
      themeButton.textContent = 'Switch to Light Theme';
    }
  }
  