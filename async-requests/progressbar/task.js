const progress = document.getElementById("progress");

const form = document.getElementById("form");

const oData = new FormData(form);

const oReq = new XMLHttpRequest();

form.addEventListener("submit", function (ev) {

    oReq.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

    oReq.send(oData);

    oReq.onloadend = function () {
      if (oReq.status == 200) {
        console.log("Успех");
      } else {
        console.log("Ошибка " + this.status);
      }
    };

    ev.preventDefault();
    
  },
  false
);

oReq.upload.onprogress = function (event) {
      progress.value = event.loaded/event.total;
    };
