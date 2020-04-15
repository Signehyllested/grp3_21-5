console.log("menu.js");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#burger").addEventListener("click", menuDown);
})

function menuDown() {
  console.log("menu down");
  document.querySelector("#burger").removeEventListener("click", menuDown);
  document.querySelector("header").style.transform = "translateY(calc(100vh - 60px)";
  document.querySelector("#burger").addEventListener("click", menuUp);
}

function menuUp() {
  console.log("menu up");
  document.querySelector("#burger").removeEventListener("click", menuUp);
  document.querySelector("header").style.transform = "translateY(0)";
  document.querySelector("#burger").addEventListener("click", menuDown);
}
