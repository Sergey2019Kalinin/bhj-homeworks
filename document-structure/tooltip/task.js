const hasTooltip = document.getElementsByClassName("has-tooltip");

for (let i = 0; i < hasTooltip.length; i++) {
      

  hasTooltip[i].addEventListener("click", (event) => {
  
    event.preventDefault();

    if (hasTooltip[i].children.length == 0) {


        let div = document.createElement("div");
        div.innerHTML = hasTooltip[i].title;
        div.className = "tooltip_active tooltip";
        hasTooltip[i].appendChild(div);

      } else if (hasTooltip[i].children[0].className === "tooltip") {
            hasTooltip[i].children[0].className =
            "tooltip_active tooltip";
      } else {
      hasTooltip[i].children[0].className = "tooltip";
  }
        hasTooltip[i].children[0].setAttribute('style', 
          `top: inherit + 20 px; left: ${hasTooltip[i].getBoundingClientRect().left}px; position: absolute`);
});
  }

