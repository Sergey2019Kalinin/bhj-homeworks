
let windowPopDanger = document.getElementById("modal_main");
let windowPopSuccess = document.getElementById("modal_success");
let btnWindowPopDanger = document.querySelector(".btn.btn_danger.modal__close.show-success");

windowPopDanger.className = "modal modal_active";

btnWindowPopDanger.onclick = () => {
    windowPopDanger.className = "modal";
    windowPopSuccess.className = "modal modal_active";
};

let btnsClose = document.querySelectorAll("div.modal__close.modal__close_times");

for(let i = 0; btnsClose.length > i; i++) {

    btnsClose[i].onclick = function() {
        this.closest('.modal').className = "modal";
    }
}