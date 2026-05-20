let startSec = 30;
const timerEl = document.getElementById('timer');
        
function updateTimerDisplay() {
  timerEl.textContent = startSec;
}
        
const intervalId = setInterval(() => {
  if (startSec > 0) {
    startSec--;           
    updateTimerDisplay();     
  }
            
  if (startSec === 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!'); 
  }
}, 1000);
        
updateTimerDisplay();