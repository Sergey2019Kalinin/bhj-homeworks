
let windowPopDanger = document.getElementById("modal_main");
let windowPopSuccess = document.getElementById("modal_success");
let btnWindowPopDanger = document.querySelector(".btn.btn_danger.modal__close.show-success");

windowPopDanger.className = "modal modal_active";

btnWindowPopDanger.onclick = () => {
    windowPopDanger.className = "modal";
    windowPopSuccess.className = "modal modal_active";
};

let btnClose = document.querySelectorAll("div.modal__close.modal__close_times")[1];

btnClose.onclick = () => {
    windowPopSuccess.className = "modal";
};

