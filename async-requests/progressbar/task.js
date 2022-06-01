const progress = document.getElementById("progress");

const data = new XMLHttpRequest();

data.upload.onprogress = function(event) {
    progress.value = event.loaded/event.total;
  };

data.onloadend = function() {
    if (data.status == 200) {
      console.log("Успех");
    } else {
      console.log("Ошибка " + this.status);
    }
  };

data.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
data.send();