let dead = +document.getElementById("dead").textContent;
let lost = +document.getElementById("lost").textContent;

const getHole = (index) => document.getElementById(`hole${index}`);

for (i = 1; i < 10; i++) {

  let customHole = getHole(i);

  getHole(i).onclick = () => {

    if (customHole.className.includes("hole_has-mole")) {
      dead++;

    } else {
      lost++;
    }

    document.getElementById("dead").textContent = dead;
    document.getElementById("lost").textContent = lost;

    if (dead === 10) {

      alert("Победа!");

      document.getElementById("dead").textContent = 0;
      document.getElementById("lost").textContent = 0;
    }

    if (lost === 5) {

      alert("Вы проиграли!");
      
      document.getElementById("dead").textContent = 0;
      document.getElementById("lost").textContent = 0;
    }
  };
}
