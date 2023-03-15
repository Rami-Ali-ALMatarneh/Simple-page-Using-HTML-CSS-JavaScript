let on = document.getElementById("On-off");

function start() {
  let goDone = on.addEventListener("click", GoDone, false);
}
function GoDone() {
  on.style.marginLeft = "55px";
}
window.addEventListener("load", start, false);
