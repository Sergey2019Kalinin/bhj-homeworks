let timer = document.getElementById("timer");

setInterval(()  =>  {

  timer.textContent = Number(timer.textContent) - 1;

  if (Number(timer.textContent) === 58)  {
    alert("Вы победили!");

    // таймер больше не движется вперёд после нуля
    timer = 0;
  }
}, 1000);
