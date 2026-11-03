const tasks = [
  { id: 1, title: "Gera íslenskuverkefni", done: false },
  { id: 2, title: "Fara á teymisfund", done: true },
  { id: 3, title: "Útbúa enskupróf", done: false }
];

for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i].title);
}

document.getElementById("verkefnalisti").innerHTML = tasks[1].title;
