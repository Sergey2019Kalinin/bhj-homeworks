let menuLink = Array.from(document.getElementsByClassName("menu__link"));

for(let i = 0; menuLink.length > i; i++) {

    menuLink[i].onclick = function() {

        haveSubMenu = this.parentElement.querySelector("ul");

        if(haveSubMenu) {

        if(haveSubMenu.className === 'menu menu_sub') {
            haveSubMenu.className = 'menu menu_sub menu_active';
            return false;
        } else if(haveSubMenu.className === 'menu menu_sub menu_active') {
              haveSubMenu.className = 'menu menu_sub';
              return false;
          }
        }
    }
}

