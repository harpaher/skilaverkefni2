let verkefni = [
  { id: 1, heiti: "Gera íslenskuverkefni", done: false },
  { id: 2, heiti: "Fara á teymisfund", done: false },
  { id: 3, heiti: "Útbúa enskupróf", done: false },
];

let teljari = 4;

let vistudVerkefni = localStorage.getItem("verkefni");

if (vistudVerkefni !== null) {
  verkefni = JSON.parse(vistudVerkefni);
}

for (let i = 0; i < verkefni.length; i++) {
  if (verkefni[i].id >= teljari) {
    teljari = verkefni[i].id + 1;
  }
}

function uppfaeraTolfraedi() {
  document.getElementById("heild").innerHTML = verkefni.length;

  let lokinVerkefni = verkefni.filter((v) => v.done === true);
  document.getElementById("lokid").innerHTML = lokinVerkefni.length;
  document.getElementById("olokid").innerHTML = verkefni.length - lokinVerkefni.length;
}

function birtaVerkefni() {
  let listi = "";

  for (let i = 0; i < verkefni.length; i++) {
    listi += '<div class="verkefnakassi' + (verkefni[i].done ? " lokid" : "") + '">';
    listi += "<p>" + verkefni[i].heiti + (verkefni[i].done ? " - Lokið" : " - Ólokið") + "</p>";
    listi += '<button id="takki' + i + '">' + (verkefni[i].done ? "Merkja sem ólokið" : "Merkja sem lokið") + "</button>";

    listi += '<button class="eyda" id="eyda' + i + '">Eyða</button>';

    listi += "</div>";
  }

  document.getElementById("verkefnalisti").innerHTML = listi;
  localStorage.setItem("verkefni", JSON.stringify(verkefni));
  uppfaeraTolfraedi();

  for (let i = 0; i < verkefni.length; i++) {
    document.getElementById("takki" + i).addEventListener("click", function () {
      verkefni[i].done = !verkefni[i].done;
      birtaVerkefni();
      console.log(verkefni[i].done);
    });

    document.getElementById("eyda" + i).addEventListener("click", function () {
      let id = verkefni[i].id;
      verkefni = verkefni.filter((v) => v.id !== id);
      birtaVerkefni();
      console.log(verkefni);
    });
  }
}

birtaVerkefni();

document.getElementById("verkefnaForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let nyttVerkefni = document.getElementById("verkefni").value.trim();

  if (nyttVerkefni === "") {
    return;
  }

  verkefni.push({
    id: teljari,
    heiti: nyttVerkefni,
    done: false,
  });

  teljari++;
  birtaVerkefni();

  document.getElementById("verkefni").value = "";
  console.log(verkefni);
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

document.getElementById("endurstilla").addEventListener("click", function () {
  if (confirm("Ertu viss um að þú viljir endurstilla verkefnalistann?")) {
    verkefni = [
      { id: 1, heiti: "Gera íslenskuverkefni", done: false },
      { id: 2, heiti: "Fara á teymisfund", done: false },
      { id: 3, heiti: "Útbúa enskupróf", done: false },
    ];

    teljari = 4;
    birtaVerkefni();

    document.getElementById("vika").value = "";
    localStorage.removeItem("vika");
  }
});
