console.log("menu.js");

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#burger").addEventListener("click", menuDown);
  document.querySelector("#burger").addEventListener("click", menuCollapse);
  document.querySelector("#dest_click").addEventListener("click", destClick);
  document.querySelector("#dest_click").addEventListener("click", menuExpand);
  document.querySelector("#om_click").addEventListener("click", omClick);
  document.querySelector("#om_click").addEventListener("click", menuExpand);
  document.querySelector("#bolig_click").addEventListener("click", boligClick);
  document.querySelector("#bolig_click").addEventListener("click", menuExpand);
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

function menuExpand() {
  document.querySelectorAll(".back").forEach((back) => {
    back.addEventListener("click", menuCollapse);
  })
  if (window.innerWidth > 1200) {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(870px)";
      document.querySelector("#burger").style.transform = "translateX(-300px)";
      document.querySelector("#login").style.transform = "translateX(-300px)";
      document.querySelector("nav div:nth-child(2)").style.transform = "translateX(-300px)";
    })
  } else {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(0)";
    })
    document.querySelector("nav div:nth-child(2)").style.transform = "translateX(-100vw)";
  }
}

function menuCollapse() {
  if (window.innerWidth > 1200) {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(1200px)";
      document.querySelector("#burger").style.transform = "translateX(0)";
      document.querySelector("#login").style.transform = "translateX(0)";
      document.querySelector("nav div:nth-child(2)").style.transform = "translateX(0)";
    })
  } else {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(100vw)";
    })
    document.querySelector("nav div:nth-child(2)").style.transform = "translateX(0)";
  }
  document.querySelectorAll("nav div:nth-child(2) article").forEach((div) => {
    div.style.opacity = "1";
  })
}

function destClick() {
  document.querySelectorAll("nav div:nth-child(2) article").forEach((div) => {
    div.style.opacity = ".5";
  })
  document.querySelector("nav div:nth-child(2) article:nth-child(4)").style.opacity = "1";
  document.querySelector("#destinationerne").style.opacity = "1";
  document.querySelector("#boligerne").style.opacity = "0";
  document.querySelector("#om_21-5").style.opacity = "0";
}

function omClick() {
  document.querySelectorAll("nav div:nth-child(2) article").forEach((div) => {
    div.style.opacity = ".5";
  })
  document.querySelector("nav div:nth-child(2) article:nth-child(3)").style.opacity = "1";
  document.querySelector("#destinationerne").style.opacity = "0";
  document.querySelector("#boligerne").style.opacity = "0";
  document.querySelector("#om_21-5").style.opacity = "1";
}

function boligClick() {
  document.querySelectorAll("nav div:nth-child(2) article").forEach((div) => {
    div.style.opacity = ".5";
  })
  document.querySelector("nav div:nth-child(2) article:nth-child(5)").style.opacity = "1";
  document.querySelector("#destinationerne").style.opacity = "0";
  document.querySelector("#boligerne").style.opacity = "1";
  document.querySelector("#om_21-5").style.opacity = "0";
}
