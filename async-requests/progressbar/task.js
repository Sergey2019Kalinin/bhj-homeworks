const progress = document.getElementById("progress");

const form = document.getElementById("form");

let progressValue = function (XMLHttpReq) {
  XMLHttpReq.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total;
  };
};

form.addEventListener(
  "submit",
  function (ev) {
    const oData = new FormData(form);

    const oReq = new XMLHttpRequest();

    oReq.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

    progressValue(oReq);

    oReq.onloadend = function () {
      if (oReq.status === 200) {
        console.log("Успех");
      } else {
        console.log("Ошибка " + this.status);
      }
    };

    oReq.send(oData);

    ev.preventDefault();
  },
  false
);
