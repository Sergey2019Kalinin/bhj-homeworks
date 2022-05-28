const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");
      pollAnswers.style.display = "flex";

const answers = new XMLHttpRequest();

answers.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");

answers.responseType = "text";

answers.send();

answers.addEventListener("readystatechange", () => {
  if (answers.readyState === answers.DONE) {
    let answer = JSON.parse(answers.responseText);

    const answerTitle = document.createElement("h2");
    answerTitle.innerHTML = answer.data.title;
    pollTitle.appendChild(answerTitle);

    let optionsArray = Array.from(answer.data.answers);

    for (let i = 0; i < optionsArray.length; i++ ) {

      let addOption = document.createElement("button");

      addOption.innerText = `${optionsArray[i]}`;
      addOption.style.marginRight = "10px";
      addOption.classList.add("poll__answer");

      pollAnswers.appendChild(addOption);

    }
}

});

