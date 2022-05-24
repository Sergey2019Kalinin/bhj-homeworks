const loader = document.getElementById("loader");

setTimeout( () => {
	loader.classList.remove("loader_active");
}, 4000); 

// место, куда добавляется
const item = document.getElementsByClassName("item")[0];

const data = new XMLHttpRequest();

data.addEventListener("readystatechange", () => {
  if (data.readyState === data.DONE) {
    let valuteList = JSON.parse(data.responseText);
    let dataObj = valuteList.response.Valute;

    for (let valute in dataObj) {
      let newItemCode = document.createElement("div");
      newItemCode.style.display = "flex";
      // newItemCode.style.fontWeight = "bold";

      newItemCode.innerHTML +=
        `<div class="item__code">` +
        dataObj[valute].CharCode +
        `</div>` +
        `<div class="item__value">` +
        dataObj[valute].Value +
        `</div>` +
        `<div class="item__currency">` +
        `руб.` +
        `</div>`;

      item.appendChild(newItemCode);
    }
  }
});

data.open("GET", "https://netology-slow-rest.herokuapp.com");

data.responseType = "text";

data.send();