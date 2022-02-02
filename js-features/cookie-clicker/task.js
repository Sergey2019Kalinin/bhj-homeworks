const cookie = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");

cookie.onclick = () => {

  cookie.width += 20;
  cookie.height += 20;

  clicker__counter.textContent = Number(clicker__counter.textContent) + 1;

  setTimeout(() => {
    cookie.width -= 20;
    cookie.height -= 20;
  }, 50);
  return;
};