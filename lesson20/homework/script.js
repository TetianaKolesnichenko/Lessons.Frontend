window.onload = function() {
    const timerDisplay = document.querySelector('.timer');
    let timeLeft = 60;
  
    function updateTimer() {
      timerDisplay.textContent = timeLeft;
      timeLeft--;
  
      if (timeLeft < 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = 'Время вышло!';
      }
    }
  
    updateTimer(); // вызываем сразу, чтобы не ждать первую секунду
  
    const timerInterval = setInterval(updateTimer, 1000);
  };







  