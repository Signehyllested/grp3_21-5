console.log("menu.js");


let URLend_menu = "pages?slug=om-21-5";
let endpoint_menu = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_menu}`;
let retter_menu = [];

document.addEventListener("DOMContentLoaded", start_menu);

function start_menu() {
  console.log("start");
  hentJSON_menu();
}

async function hentJSON_menu() {
  console.log("hent json");

  const response_menu = await fetch(endpoint_menu);
  retter_menu = await response_menu.json();
  visRetter_menu();
}

function visRetter_menu() {
  console.log(retter_menu);

  retter_menu.forEach(element => {
    console.log(element.title.rendered);
  });
}









let header = document.createElement("header");
let nav = document.createElement("nav");
header.appendChild(nav);

let main = document.querySelector("main")
main.insertBefore(header, main.childNodes[0])

let logoContainer = document.createElement("div");
logoContainer.id = "logo_container";
nav.appendChild(logoContainer);

let logo = document.createElement("img");
logo.src = "assets/img/21-5_logo.svg";
logo.alt = "21-5 logo";
logo.id = "logo";
let burger = document.createElement("img");
burger.src = "assets/img/burger2.svg";
burger.alt = "burger menu";
burger.id = "burger";
logoContainer.appendChild(logo);
logoContainer.appendChild(burger);

let nav_wrap = document.createElement("div");
nav.appendChild(nav_wrap);

let article1 = document.createElement("article");
let a1 = document.createElement("a");
a1.href = ""
let h3_1 = document.createElement("h3");
let page1 = document.createTextNode("Forside");
nav_wrap.appendChild(article1);
article1.appendChild(a1);
a1.appendChild(h3_1);
h3_1.appendChild(page1);

let article2 = document.createElement("article");
let a2 = document.createElement("a");
a2.href = ""
let h3_2 = document.createElement("h3");
let page2 = document.createTextNode("Køb din andel");
nav_wrap.appendChild(article2);
article2.appendChild(a2);
a2.appendChild(h3_2);
h3_2.appendChild(page2);

let article3 = document.createElement("article");
let h3_3 = document.createElement("h3");
h3_3.id = "om_click"
let page3 = document.createTextNode("Om 21-5");
nav_wrap.appendChild(article3);
article3.appendChild(h3_3);
h3_3.appendChild(page3);

let article4 = document.createElement("article");
let h3_4 = document.createElement("h3");
h3_4.id = "dest_click"
let page4 = document.createTextNode("Destinationerne");
nav_wrap.appendChild(article4);
article4.appendChild(h3_4);
h3_4.appendChild(page4);

let article5 = document.createElement("article");
let h3_5 = document.createElement("h3");
h3_5.id = "bolig_click"
let page5 = document.createTextNode("Boligerne");
nav_wrap.appendChild(article5);
article5.appendChild(h3_5);
h3_5.appendChild(page5);

let top_wrap = document.createElement("div");
nav.appendChild(top_wrap);
let lande = document.createElement("p");
top_wrap.appendChild(lande);
lande.innerHTML = "Danmark <br>Norge <br>Sverige <br>USA <br>Canada";
let login = document.createElement("p");
login.id = "login";
let login_i = document.createTextNode("Login");
top_wrap.appendChild(login);
login.appendChild(login_i);

let om_21_5 = document.createElement("div");
om_21_5.id = "om_21-5";
om_21_5.classList.add("underkategori");
nav.appendChild(om_21_5);
let om_21_5_wrap = document.createElement("div");
om_21_5.appendChild(om_21_5_wrap);
let om_ua_1 = document.createElement("a");
om_ua_1.href = ""
let om_up_1 = document.createElement("p");
let om_up_1_i = document.createTextNode("Bag om 21-5");
om_21_5_wrap.appendChild(om_ua_1);
om_ua_1.appendChild(om_up_1);
om_up_1.appendChild(om_up_1_i);
let om_ua_2 = document.createElement("a");
om_ua_2.href = ""
let om_up_2 = document.createElement("p");
let om_up_2_i = document.createTextNode("Derfor er 21-5 så smart");
om_21_5_wrap.appendChild(om_ua_2);
om_ua_2.appendChild(om_up_2);
om_up_2.appendChild(om_up_2_i);
let om_ua_3 = document.createElement("a");
om_ua_3.href = ""
let om_up_3 = document.createElement("p");
let om_up_3_i = document.createTextNode("Kontakt os");
om_21_5_wrap.appendChild(om_ua_3);
om_ua_3.appendChild(om_up_3);
om_up_3.appendChild(om_up_3_i);
let om_ua_4 = document.createElement("a");
om_ua_4.href = ""
let om_up_4 = document.createElement("p");
let om_up_4_i = document.createTextNode("Økonomi, jura og skat");
om_21_5_wrap.appendChild(om_ua_4);
om_ua_4.appendChild(om_up_4);
om_up_4.appendChild(om_up_4_i);
let om_ua_5 = document.createElement("a");
om_ua_5.href = ""
let om_up_5 = document.createElement("p");
let om_up_5_i = document.createTextNode("Svar på dine spørgsmål");
om_21_5_wrap.appendChild(om_ua_5);
om_ua_5.appendChild(om_up_5);
om_up_5.appendChild(om_up_5_i);
let back_om = document.createElement("p");
back_om.classList.add("back");
om_21_5_wrap.appendChild(back_om);

let destinationerne = document.createElement("div");
destinationerne.classList.add("underkategori");
destinationerne.id = "destinationerne";
nav.appendChild(destinationerne);
let destinationerne_wrap = document.createElement("div");
destinationerne.appendChild(destinationerne_wrap);
let dest_ua_1 = document.createElement("a");
dest_ua_1.href = ""
let dest_up_1 = document.createElement("p");
let dest_up_1_i = document.createTextNode("Mallorca");
destinationerne_wrap.appendChild(dest_ua_1);
dest_ua_1.appendChild(dest_up_1);
dest_up_1.appendChild(dest_up_1_i);
let dest_ua_2 = document.createElement("a");
dest_ua_2.href = ""
let dest_up_2 = document.createElement("p");
let dest_up_2_i = document.createTextNode("Sydspanien");
destinationerne_wrap.appendChild(dest_ua_2);
dest_ua_2.appendChild(dest_up_2);
dest_up_2.appendChild(dest_up_2_i);
let dest_ua_3 = document.createElement("a");
dest_ua_3.href = ""
let dest_up_3 = document.createElement("p");
let dest_up_3_i = document.createTextNode("Toscana");
destinationerne_wrap.appendChild(dest_ua_3);
dest_ua_3.appendChild(dest_up_3);
dest_up_3.appendChild(dest_up_3_i);
let dest_ua_4 = document.createElement("a");
dest_ua_4.href = ""
let dest_up_4 = document.createElement("p");
let dest_up_4_i = document.createTextNode("Sydfrankrig");
destinationerne_wrap.appendChild(dest_ua_4);
dest_ua_4.appendChild(dest_up_4);
dest_up_4.appendChild(dest_up_4_i);
let dest_ua_5 = document.createElement("a");
dest_ua_5.href = ""
let dest_up_5 = document.createElement("p");
let dest_up_5_i = document.createTextNode("Charmonix");
destinationerne_wrap.appendChild(dest_ua_5);
dest_ua_5.appendChild(dest_up_5);
dest_up_5.appendChild(dest_up_5_i);
let dest_ua_6 = document.createElement("a");
dest_ua_6.href = ""
let dest_up_6 = document.createElement("p");
let dest_up_6_i = document.createTextNode("New York");
destinationerne_wrap.appendChild(dest_ua_6);
dest_ua_6.appendChild(dest_up_6);
dest_up_6.appendChild(dest_up_6_i);
let dest_ua_7 = document.createElement("a");
dest_ua_7.href = ""
let dest_up_7 = document.createElement("p");
let dest_up_7_i = document.createTextNode("Barcelona");
destinationerne_wrap.appendChild(dest_ua_7);
dest_ua_7.appendChild(dest_up_7);
dest_up_7.appendChild(dest_up_7_i);
let dest_ua_8 = document.createElement("a");
dest_ua_8.href = ""
let dest_up_8 = document.createElement("p");
let dest_up_8_i = document.createTextNode("Paris");
destinationerne_wrap.appendChild(dest_ua_8);
dest_ua_8.appendChild(dest_up_8);
dest_up_8.appendChild(dest_up_8_i);
let dest_ua_9 = document.createElement("a");
dest_ua_9.href = ""
let dest_up_9 = document.createElement("p");
let dest_up_9_i = document.createTextNode("Rom");
destinationerne_wrap.appendChild(dest_ua_9);
dest_ua_9.appendChild(dest_up_9);
dest_up_9.appendChild(dest_up_9_i);
let dest_ua_10 = document.createElement("a");
dest_ua_10.href = ""
let dest_up_10 = document.createElement("p");
let dest_up_10_i = document.createTextNode("Om destinationerne");
destinationerne_wrap.appendChild(dest_ua_10);
dest_ua_10.appendChild(dest_up_10);
dest_up_10.appendChild(dest_up_10_i);
let back_dest = document.createElement("p");
back_dest.classList.add("back");
om_21_5_wrap.appendChild(back_dest);

let boligerne = document.createElement("div");
boligerne.id = "boligerne";
boligerne.classList.add("underkategori");
nav.appendChild(boligerne);
let boligerne_wrap = document.createElement("div");
boligerne.appendChild(boligerne_wrap);
let bolig_ua_1 = document.createElement("a");
bolig_ua_1.href = ""
let bolig_up_1 = document.createElement("p");
let bolig_up_1_i = document.createTextNode("Om boligerne");
boligerne_wrap.appendChild(bolig_ua_1);
bolig_ua_1.appendChild(bolig_up_1);
bolig_up_1.appendChild(bolig_up_1_i);
let bolig_ua_2 = document.createElement("a");
bolig_ua_2.href = ""
let bolig_up_2 = document.createElement("p");
let bolig_up_2_i = document.createTextNode("Istandsættelse");
boligerne_wrap.appendChild(bolig_ua_2);
bolig_ua_2.appendChild(bolig_up_2);
bolig_up_2.appendChild(bolig_up_2_i);
let bolig_ua_3 = document.createElement("a");
bolig_ua_3.href = ""
let bolig_up_3 = document.createElement("p");
let bolig_up_3_i = document.createTextNode("Udvælgelse");
boligerne_wrap.appendChild(bolig_ua_3);
bolig_ua_3.appendChild(bolig_up_3);
bolig_up_3.appendChild(bolig_up_3_i);
let back_bolig = document.createElement("p");
back_bolig.classList.add("back");
om_21_5_wrap.appendChild(back_bolig);






document.addEventListener("DOMContentLoaded", () => {
  burger.addEventListener("click", menuDown);
  burger.addEventListener("click", menuCollapse);
  h3_4.addEventListener("click", destClick);
  h3_4.addEventListener("click", menuExpand);
  h3_3.addEventListener("click", omClick);
  h3_3.addEventListener("click", menuExpand);
  h3_5.addEventListener("click", boligClick);
  h3_5.addEventListener("click", menuExpand);
})

function menuDown() {
  console.log("menu down");
  burger.removeEventListener("click", menuDown);
  header.style.transform = "translateY(calc(100vh - 60px)";
  burger.addEventListener("click", menuUp);
}

function menuUp() {
  console.log("menu up");
  burger.removeEventListener("click", menuUp);
  header.style.transform = "translateY(0)";
  burger.addEventListener("click", menuDown);
}

function menuExpand() {
  document.querySelectorAll(".back").forEach((back) => {
    back.addEventListener("click", menuCollapse);
  })
  if (window.innerWidth > 1200) {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(870px)";
      burger.style.transform = "translateX(-300px)";
      login.style.transform = "translateX(-300px)";
      nav_wrap.style.transform = "translateX(-300px)";
    })
  } else {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(0)";
    })
    nav_wrap.style.transform = "translateX(-100vw)";
  }
}

function menuCollapse() {
  if (window.innerWidth > 1200) {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(1200px)";
      burger.style.transform = "translateX(0)";
      login.style.transform = "translateX(0)";
      nav_wrap.style.transform = "translateX(0)";
    })
  } else {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(100vw)";
    })
    nav_wrap.style.transform = "translateX(0)";
  }
  document.querySelectorAll("nav div:nth-child(2) article").forEach((div) => {
    div.style.opacity = "1";
  })
}

function destClick() {
  destinationerne_wrap.style.visibility = "visible";
  boligerne_wrap.style.visibility = "hidden";
  om_21_5_wrap.style.visibility = "hidden";
  document.querySelectorAll("nav div:nth-child(2) article").forEach((div) => {
    div.style.opacity = ".5";
  })
  article4.style.opacity = "1";
}

function omClick() {
  destinationerne_wrap.style.visibility = "hidden";
  boligerne_wrap.style.visibility = "hidden";
  om_21_5_wrap.style.visibility = "visible";
  document.querySelectorAll("nav div:nth-child(2) article").forEach((div) => {
    div.style.opacity = ".5";
  })
  article3.style.opacity = "1";
}

function boligClick() {
  destinationerne_wrap.style.visibility = "hidden";
  boligerne_wrap.style.visibility = "visible";
  om_21_5_wrap.style.visibility = "hidden";
  document.querySelectorAll("nav div:nth-child(2) article").forEach((div) => {
    div.style.opacity = ".5";
  })
  article5.style.opacity = "1";
}
