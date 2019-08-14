function showData() {
    var block = document.getElementById('block');
    var timerFIG = 5; // Время в секундах, через которое появляется кнопка
    startTimer();
   
    function startTimer() {
      if (timerFIG > 0) {
        block.innerHTML = 'Данные появятся через ' + timerFIG + ' секунд...'; //заменить на код pre-loader
        timerFIG--;
        setTimeout(startTimer, 1000);
      } else {
        block.innerHTML = 'innerPage.html'; //заменить на код нужной страницы
      }
    }
  }