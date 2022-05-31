const input = document.querySelectorAll("input");

for (let i = 0; i < input.length; i++) {

  input[i].addEventListener("click", function () {

    if (input[i].closest(".interests_active")) {
      input[i].checked = !input[i].checked;
      
    } else {
      let checkedInput = input[i]
        .closest(".interest")
        .querySelectorAll("ul")[0]
        .querySelectorAll("input");

      for (let j = 0; j < checkedInput.length; ++j) {
        checkedInput[j].checked = input[i].checked;
      }
    }
  });
}
