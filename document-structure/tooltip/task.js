const hasTooltip = document.getElementsByClassName("has-tooltip");

for (let i = 0; i < hasTooltip.length; i++) {
      

  hasTooltip[i].addEventListener("click", (event) => {
event.preventDefault();
    const tooltip = document.querySelector("tooltip_active");

if (tooltip !== null) {
    switch(hasTooltip[i].innerText) {
        case 'Помогите пожалуйста':  // if (x === 'value1')
          tooltip.style.top = "15 px";
      tooltip.style.left = "50";
    break;

  case 'Нажми сюда и выиграй миллион!':  // if (x === 'value2')
      tooltip.style.top = "155 px";
      tooltip.style.left = "178 px";
    break;

  case 'Для просмотра подсказки нажмите сюда':  // if (x === 'value2')
      tooltip.style.top = "135 px";
      tooltip.style.left = "186 px";
    break;
  };


    tooltip.style.position = "absolute";
    }





    if (hasTooltip[i].children.length == 0) {
      hasTooltip[i].appendChild(document.createElement("div")).innerHTML +=
        " " + hasTooltip[i].title;

            let tooltip = hasTooltip[i].children[0];

          tooltip.className = "tooltip_active tooltip";

        
} else if (hasTooltip[i].children[0].className === "tooltip") {
            hasTooltip[i].children[0].className =
            "tooltip_active tooltip";
      } else {
      hasTooltip[i].children[0].className= "tooltip";
}
});
}

