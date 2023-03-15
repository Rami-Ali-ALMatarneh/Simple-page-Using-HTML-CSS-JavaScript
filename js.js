let goOn = document.getElementById("toggle-btn");
let label = document.getElementById("On-off");

let goOn1 = document.getElementById("toggle-btn1");
let label1 = document.getElementById("On-off1");

label.addEventListener("click", (e) => {
  goOn.classList.toggle("toggleOn");
  label.classList.toggle("bg-bluePrimary");
});

label1.addEventListener("click", (e) => {
  goOn1.classList.toggle("toggleOn");
  label1.classList.toggle("bg-bluePrimary");
});
