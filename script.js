let tasks = [
  { id: 1, title: "Gera íslenskuverkefni", done: false },
  { id: 2, title: "Fara á teymisfund", done: true },
  { id: 3, title: "Útbúa enskupróf", done: false },
];

function birtaVerkefni() {
  let listi = "";

  for (let i = 0; i < tasks.length; i++) {
   if (tasks[i].done === true) {
    listi += "<p>" + tasks[i].title + " - Lokið</p>";
}  else {
    listi += "<p>" + tasks[i].title + " - Ólokið</p>";
}
    listi += '<button id="takki' + i + '">Breyta stöðu</button>';
    listi += '<button id="eyda' + i + '">Eyða</button>';
  }

  document.getElementById("verkefnalisti").innerHTML = listi;
  document.getElementById("heild").innerHTML = tasks.length;
  
  let lokinVerkefni = tasks.filter((verkefni) => verkefni.done === true);
  document.getElementById("lokid").innerHTML = lokinVerkefni.length;
  document.getElementById("olokid").innerHTML = tasks.length - lokinVerkefni.length;

  for (let i = 0; i < tasks.length; i++) {
  document.getElementById("takki" + i).addEventListener("click", function() {
    tasks[i].done = !tasks[i].done;
    birtaVerkefni();
    console.log(tasks[i].done);
  });

  document.getElementById("eyda" + i).addEventListener("click", function() {
  tasks = tasks.filter((verkefni) => verkefni.id !== tasks[i].id);
  birtaVerkefni();
  console.log(tasks);
});
}
}

birtaVerkefni();
document.getElementById("verkefnaForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let nyttVerkefni = document.getElementById("verkefni").value;

   tasks.push({
    id: tasks.length + 1,
    title: nyttVerkefni,
    done: false
  });

  birtaVerkefni();

  document.getElementById("verkefni").value = "";

  console.log(tasks);
});