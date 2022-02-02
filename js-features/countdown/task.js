const timer = document.getElementById("timer");

setInterval(()  =>  {

  timer.textContent = Number(timer.textContent) - 1;

  if (Number(timer.textContent) === 0)  {
    alert("Вы победили!");
  }
}, 1000);
