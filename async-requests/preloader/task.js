const loader = document.getElementById("loader");

// место, куда добавляется
const item = document.getElementsByClassName("item")[0];

const data = new XMLHttpRequest();

data.open("GET", "https://netology-slow-rest.herokuapp.com");

data.send();

data.onload = function () {
  if (data.status === 200) {
    loader.classList.remove("loader_active");

    let valuteList = JSON.parse(this.responseText);
    let dataObj = valuteList.response.Valute;

    let rubText = document.createElement("div");
    rubText.className = "item__currency";
    rubText.textContent = "руб.";

    for (let valute in dataObj) {
      let newItemCode = document.createElement("div");
      newItemCode.style.display = "flex";

      let Value = document.createElement("div");
      Value.className = "item__value";
      Value.textContent = dataObj.AMD.Value;

      let CharCode = document.createElement("div");
      CharCode.className = "item__code";
      CharCode.textContent = dataObj.AMD.CharCode;

      newItemCode.appendChild(CharCode);
      newItemCode.appendChild(Value);
      newItemCode.appendChild(rubText);

      item.appendChild(newItemCode);
    }
  } else {
    alert("Ошибка: " + this.status);
  }

  return;
};
