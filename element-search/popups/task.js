
let windowPopDanger = document.getElementById("modal_main");
windowPopDanger.className = "modal modal_active";

let windowPopSuccess = document.getElementById("modal_success");

windowPopDanger.onclick = () => {
    windowPopSuccess.className = "modal modal_active";
};

let btnClose = (document.getElementsByClassName("modal__close modal__close_times"))[1];

btnClose.onclick = () => {
    windowPopSuccess.className = "modal";
    windowPopDanger.className = "modal";
};

