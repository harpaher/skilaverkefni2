let tasks = [
  { id: 1, title: "Gera íslenskuverkefni", done: false },
  { id: 2, title: "Fara á teymisfund", done: false },
  { id: 3, title: "Útbúa enskupróf", done: false },
];

let teljari = 4;

let vistudVerkefni = localStorage.getItem("verkefni");

if (vistudVerkefni !== null) {
  tasks = JSON.parse(vistudVerkefni);
}

for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].id >= teljari) {
    teljari = tasks[i].id + 1;
  }
}

function birtaVerkefni() {
  let listi = "";

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].done === true) {
      listi += '<div class="verkefnakassi lokid">';
    } else {
      listi += '<div class="verkefnakassi">';
    }

    if (tasks[i].done === true) {
      listi += "<p>" + tasks[i].title + " - Lokið</p>";
    } else {
      listi += "<p>" + tasks[i].title + " - Ólokið</p>";
    }

    if (tasks[i].done === true) {
      listi += '<button id="takki' + i + '">Merkja ólokið</button>';
    } else {
      listi += '<button id="takki' + i + '">Merkja lokið</button>';
    }

    listi += '<button class="eyda" id="eyda' + i + '">Eyða</button>';

    listi += "</div>";
  }

  document.getElementById("verkefnalisti").innerHTML = listi;
  localStorage.setItem("verkefni", JSON.stringify(tasks));
  document.getElementById("heild").innerHTML = tasks.length;

  let lokinVerkefni = tasks.filter((verkefni) => verkefni.done === true);
  document.getElementById("lokid").innerHTML = lokinVerkefni.length;
  document.getElementById("olokid").innerHTML =
    tasks.length - lokinVerkefni.length;

  for (let i = 0; i < tasks.length; i++) {
    document.getElementById("takki" + i).addEventListener("click", function () {
      tasks[i].done = !tasks[i].done;
      birtaVerkefni();
      console.log(tasks[i].done);
    });

    document.getElementById("eyda" + i).addEventListener("click", function () {
      tasks = tasks.filter((verkefni) => verkefni.id !== tasks[i].id);
      birtaVerkefni();
      console.log(tasks);
    });
  }
}

birtaVerkefni();
document
  .getElementById("verkefnaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let nyttVerkefni = document.getElementById("verkefni").value;

    tasks.push({
      id: teljari,
      title: nyttVerkefni,
      done: false,
    });

    teljari++;

    birtaVerkefni();

    document.getElementById("verkefni").value = "";

    console.log(tasks);
  });

document.getElementById("vika").addEventListener("change", function () {
  localStorage.setItem("vika", document.getElementById("vika").value);
});

let vistudVika = localStorage.getItem("vika");

if (vistudVika !== null) {
  document.getElementById("vika").value = vistudVika;
}

document.getElementById("hreinsaViku").addEventListener("click", function () {
  document.getElementById("vika").value = "";
  localStorage.removeItem("vika");
});
