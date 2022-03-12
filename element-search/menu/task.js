let menuLink = Array.from(document.getElementsByClassName("menu__link"));

for(i = 0; menuLink.length < i; i++) {
    menuLink[i].onclick = function() {
        if(!menuLink[i].parentElement.querySelector("ul")) {
            menuLink[i].parentElement.querySelector("ul").className = 'menu menu_sub menu_active';
        }
    }
}


