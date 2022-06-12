const progress = document.getElementById("progress");

const form = document.getElementById("form");

form.addEventListener("submit", function (ev) {

	const oData = new FormData(form);

	const oReq = new XMLHttpRequest();

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
    
  },false);

// не понимаю как обратиться к запросу вне обработчика
    oReq.upload.onprogress = function (event) {
      progress.value = event.loaded/event.total;
    };

