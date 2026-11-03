const tasks = [
  { id: 1, title: "Gera íslenskuverkefni", done: false },
  { id: 2, title: "Fara á teymisfund", done: true },
  { id: 3, title: "Útbúa enskupróf", done: false },
];

function birtaVerkefni() {
  let listi = "";

  for (let i = 0; i < tasks.length; i++) {
    listi += "<p>" + tasks[i].title + "</p>";
  }

  document.getElementById("verkefnalisti").innerHTML = listi;
}

birtaVerkefni();
document.getElementById("verkefnaForm").addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("Ýtt var á Bæta við!");
});