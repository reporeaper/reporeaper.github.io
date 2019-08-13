function showData() {
    var block = document.getElementById('block');
    var timerFIG = 5; // Время в секундах, через которое появляется кнопка
    startTimer();
   
    function startTimer() {
      if (timerFIG > 0) {
        block.innerHTML = 'Данные появятся через ' + timerFIG + ' секунд...';
        timerFIG--;
        setTimeout(startTimer, 1000);
      } else {
        block.innerHTML = 'Данные к показу после всех действий';
      }
    }
  }