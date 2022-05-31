const loader = document.getElementById("loader");

// место, куда добавляется
const item = document.getElementsByClassName("item")[0];
item.style.flexDirection = "column";

const data = new XMLHttpRequest();

data.open("GET", "https://netology-slow-rest.herokuapp.com");

data.send();

data.onload = function () {
  if (data.status === 200) {
    loader.classList.remove("loader_active");

    let valuteList = JSON.parse(data.responseText);
    let dataObj = valuteList.response.Valute;

    for (let valute in dataObj) {
      let value = document.createElement("div");
      value.className = "item__value";
      value.textContent = dataObj[valute].Value;

      let charCode = document.createElement("div");
      charCode.className = "item__code";
      charCode.textContent = dataObj[valute].CharCode;

      let rubText = document.createElement("div");
      rubText.className = "item__currency";
      rubText.textContent = "руб.";

      let newItemCode = document.createElement("div");
      newItemCode.style.display = "flex";

      newItemCode.appendChild(charCode);
      newItemCode.appendChild(value);
      newItemCode.appendChild(rubText);

      item.appendChild(newItemCode);
    }
  } else {
    alert("Ошибка: " + data.status);
  }
};
