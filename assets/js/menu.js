console.log("menu.js");




document.addEventListener("DOMContentLoaded", start_menu);

function start_menu() {
  hentJSON_kob_din_andel();
  hentJSON_om_21_5();
  hentJSON_destinationerne();
  hentJSON_boligerne();
}


const urlParams_menu = new URLSearchParams(window.location.search);
const slug_menu = urlParams_menu.get("slug");

//hent alle posts med categorien køb din andel
let URLend_kob_din_andel = "posts?categories=7";
let endpoint_kob_din_andel = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_kob_din_andel}`;
let retter_kob_din_andel = [];

async function hentJSON_kob_din_andel() {

  const response_kob_din_andel = await fetch(endpoint_kob_din_andel);
  retter_kob_din_andel = await response_kob_din_andel.json();
  visRetter_kob_din_andel();
}

function visRetter_kob_din_andel() {
  retter_kob_din_andel.forEach(kobpkt => {
    let om_ua = document.createElement("a");
    om_ua.addEventListener("click", () => {
      document.querySelector("#anim").style.width = "50vw";
      document.querySelector("#pre").style.width = "100vh";
      document.querySelector("#pre").style.height = "100vh";
      document.querySelector("#pre").style.transform = "scale(2.5)";

      setTimeout(function () {
        location.href = `template.html?slug=${kobpkt.slug}`
      }, 500)
    })
    let om_up = document.createElement("p");
    let om_up_i = document.createTextNode(kobpkt.title.rendered);
    kob_din_andel_wrap.appendChild(om_ua);
    om_ua.appendChild(om_up);
    om_up.appendChild(om_up_i);
    if (slug_menu == kobpkt.slug && slug_menu != "forside") {
      menuExpand();
      om_up.classList.add("on_this");
      document.querySelectorAll("nav div:nth-child(2) article").forEach((article) => {
        article.style.opacity = ".5";
      })
      document.querySelector("#kob_din_andel").style.zIndex = zIndex;
      document.querySelector("#kob_click").parentElement.style.opacity = "1";
    }
  });
  let back_om = document.createElement("p");
  back_om.classList.add("back");
  kob_din_andel_wrap.appendChild(back_om);
}

//hent alle posts med categorien om 21 5
let URLend_om_21_5 = "posts?categories=6";
let endpoint_om_21_5 = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_om_21_5}`;
let retter_om_21_5 = [];

async function hentJSON_om_21_5() {

  const response_om_21_5 = await fetch(endpoint_om_21_5);
  retter_om_21_5 = await response_om_21_5.json();
  visRetter_om_21_5();
}

function visRetter_om_21_5() {

  retter_om_21_5.forEach(ompkt => {
    let om_ua = document.createElement("a");
    om_ua.addEventListener("click", () => {
      document.querySelector("#anim").style.width = "50vw";
      document.querySelector("#pre").style.width = "100vh";
      document.querySelector("#pre").style.height = "100vh";
      document.querySelector("#pre").style.transform = "scale(2.5)";

      setTimeout(function () {
        location.href = `template.html?slug=${ompkt.slug}`
      }, 500)
    })
    let om_up = document.createElement("p");
    let om_up_i = document.createTextNode(ompkt.title.rendered);
    om_21_5_wrap.appendChild(om_ua);
    om_ua.appendChild(om_up);
    om_up.appendChild(om_up_i);
    if (slug_menu == ompkt.slug && slug_menu != "forside") {
      menuExpand();
      om_up.classList.add("on_this");
      document.querySelectorAll("nav div:nth-child(2) article").forEach((article) => {
        article.style.opacity = ".5";
      })
      document.querySelector("#om_21-5").style.zIndex = zIndex;
      document.querySelector("#om_click").parentElement.style.opacity = "1";
    }
  });
  let back_om = document.createElement("p");
  back_om.classList.add("back");
  om_21_5_wrap.appendChild(back_om);
}

//hent alle posts med categorien destinationerne
let URLend_destinationerne = "posts?categories=5";
let endpoint_destinationerne = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_destinationerne}`;
let retter_destinationerne = [];

async function hentJSON_destinationerne() {

  const response_destinationerne = await fetch(endpoint_destinationerne);
  retter_destinationerne = await response_destinationerne.json();
  visRetter_destinationerne();
}

function visRetter_destinationerne() {

  retter_destinationerne.forEach(destpkt => {
    let om_ua = document.createElement("a");
    om_ua.addEventListener("click", () => {
      document.querySelector("#anim").style.width = "50vw";
      document.querySelector("#pre").style.width = "100vh";
      document.querySelector("#pre").style.height = "100vh";
      document.querySelector("#pre").style.transform = "scale(2.5)";
      setTimeout(function () {
        location.href = `template.html?slug=${destpkt.slug}`
      }, 500)
    })
    let om_up = document.createElement("p");
    let om_up_i = document.createTextNode(destpkt.title.rendered);
    destinationerne_wrap.appendChild(om_ua);
    om_ua.appendChild(om_up);
    om_up.appendChild(om_up_i);
    if (slug_menu == destpkt.slug && slug_menu != "forside") {
      menuExpand();
      om_up.classList.add("on_this");
      document.querySelectorAll("nav div:nth-child(2) article").forEach((article) => {
        article.style.opacity = ".5";
      })
      document.querySelector("#destinationerne").style.zIndex = zIndex;
      document.querySelector("#dest_click").parentElement.style.opacity = "1";
    }
  });
  let back_om = document.createElement("p");
  back_om.classList.add("back");
  destinationerne_wrap.appendChild(back_om);
}

//hent alle posts med categorien boligerne
let URLend_boligerne = "posts?categories=4";
let endpoint_boligerne = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_boligerne}`;
let retter_boligerne = [];

async function hentJSON_boligerne() {

  const response_boligerne = await fetch(endpoint_boligerne);
  retter_boligerne = await response_boligerne.json();
  visRetter_boligerne();
}

function visRetter_boligerne() {

  retter_boligerne.forEach(boligpkt => {
    let om_ua = document.createElement("a");
    om_ua.addEventListener("click", () => {
      document.querySelector("#anim").style.width = "50vw";
      document.querySelector("#pre").style.width = "100vh";
      document.querySelector("#pre").style.height = "100vh";
      document.querySelector("#pre").style.transform = "scale(2.5)";
      setTimeout(function () {
        location.href = `template.html?slug=${boligpkt.slug}`
      }, 500)
    })
    let om_up = document.createElement("p");
    let om_up_i = document.createTextNode(boligpkt.title.rendered);
    boligerne_wrap.appendChild(om_ua);
    om_ua.appendChild(om_up);
    om_up.appendChild(om_up_i);
    if (slug_menu == boligpkt.slug && slug_menu != "forside") {
      menuExpand();
      om_up.classList.add("on_this");
      document.querySelectorAll("nav div:nth-child(2) article").forEach((article) => {
        article.style.opacity = ".5";
      })
      document.querySelector("#boligerne").style.zIndex = zIndex;
      document.querySelector("#bolig_click").parentElement.style.opacity = "1";
    }
  });
  let back_om = document.createElement("p");
  back_om.classList.add("back");
  boligerne_wrap.appendChild(back_om);
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
logo.src = "../../assets/img/21-5_logo.svg";
logo.alt = "21-5 logo";
logo.id = "logo";
logo.addEventListener("click", () => {
  document.querySelector("#anim").style.width = "50vw";
  document.querySelector("#pre").style.width = "100vh";
  document.querySelector("#pre").style.height = "100vh";
  document.querySelector("#pre").style.transform = "scale(2.5)";
  setTimeout(function () {
    location.href = `index.html`;
  }, 500)
})
let burger = document.createElement("img");
burger.src = "../../assets/img/burger2.svg";
burger.alt = "burger menu";
burger.id = "burger";
logoContainer.appendChild(logo);
logoContainer.appendChild(burger);

let nav_wrap = document.createElement("div");
nav.appendChild(nav_wrap);

let article1 = document.createElement("article");
let a1 = document.createElement("a");
a1.href = "index.html"
let h3_1 = document.createElement("h3");
let page1 = document.createTextNode("Forside");
nav_wrap.appendChild(article1);
article1.appendChild(a1);
a1.appendChild(h3_1);
h3_1.appendChild(page1);

let article2 = document.createElement("article");
let h3_2 = document.createElement("h3");
h3_2.id = "kob_click"
let page2 = document.createTextNode("Køb din andel");
nav_wrap.appendChild(article2);
article2.appendChild(h3_2);
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
nav_wrap.appendChild(article4);
article4.appendChild(h3_4);
h3_4.innerHTML = "Destina&shytionerne";

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
lande.innerHTML = "Danmark";
let login = document.createElement("p");
login.id = "login";
let login_i = document.createTextNode("Login");
top_wrap.appendChild(login);
login.appendChild(login_i);

let kob_din_andel = document.createElement("div");
kob_din_andel.id = "kob_din_andel";
kob_din_andel.classList.add("underkategori");
nav.appendChild(kob_din_andel);
let kob_din_andel_wrap = document.createElement("div");
kob_din_andel.appendChild(kob_din_andel_wrap);

let om_21_5 = document.createElement("div");
om_21_5.id = "om_21-5";
om_21_5.classList.add("underkategori");
nav.appendChild(om_21_5);
let om_21_5_wrap = document.createElement("div");
om_21_5.appendChild(om_21_5_wrap);

let destinationerne = document.createElement("div");
destinationerne.classList.add("underkategori");
destinationerne.id = "destinationerne";
nav.appendChild(destinationerne);
let destinationerne_wrap = document.createElement("div");
destinationerne.appendChild(destinationerne_wrap);

let boligerne = document.createElement("div");
boligerne.id = "boligerne";
boligerne.classList.add("underkategori");
nav.appendChild(boligerne);
let boligerne_wrap = document.createElement("div");
boligerne.appendChild(boligerne_wrap);









document.addEventListener("DOMContentLoaded", () => {
  burger.addEventListener("click", menuDown);
  /*burger.addEventListener("click", menuCollapse);*/
  h3_2.addEventListener("click", kobClick);
  h3_2.addEventListener("click", menuExpand);
  h3_3.addEventListener("click", omClick);
  h3_3.addEventListener("click", menuExpand);
  h3_4.addEventListener("click", destClick);
  h3_4.addEventListener("click", menuExpand);
  h3_5.addEventListener("click", boligClick);
  h3_5.addEventListener("click", menuExpand);
})

function menuDown() {
  console.log("menu down");
  burger.removeEventListener("click", menuDown);
  header.style.transform = "translateY(calc(100vh - 60px)";
  burger.addEventListener("click", menuUp);


  document.querySelectorAll(".back").forEach((back) => {
    back.addEventListener("click", menuCollapse);
  })
}

function menuUp() {
  console.log("menu up");
  burger.removeEventListener("click", menuUp);
  header.style.transform = "translateY(0)";
  burger.addEventListener("click", menuDown);
}

function menuExpand() {
  console.log("expand");
  console.log(zIndex);
  if (window.innerWidth > 1200) {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(880px)";
      nav_wrap.style.transform = "translateX(-300px)";
    })
  } else {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(-20px)";
    })
    nav_wrap.style.transform = "translateX(calc(-100vw - 20px))";
  }
}

function menuCollapse() {
  console.log("collapse");
  if (window.innerWidth > 1200) {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(1200px)";
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

let zIndex = 5;

function kobClick() {
  console.log("kob click");
  zIndex++;
  document.querySelector("#kob_din_andel").style.zIndex = zIndex;
  document.querySelectorAll("nav div:nth-child(2) article").forEach((div) => {
    div.style.opacity = ".5";
  })
  article2.style.opacity = "1";
}

function omClick() {
  console.log("om click")
  zIndex++;
  document.querySelector("#om_21-5").style.zIndex = zIndex;
  document.querySelectorAll("nav div:nth-child(2) article").forEach((div) => {
    div.style.opacity = ".5";
  })
  article3.style.opacity = "1";
}

function destClick() {
  console.log("dest click")
  zIndex++;
  document.querySelector("#destinationerne").style.zIndex = zIndex;
  document.querySelectorAll("nav div:nth-child(2) article").forEach((div) => {
    div.style.opacity = ".5";
  })
  article4.style.opacity = "1";
}

function boligClick() {
  console.log("bolig click")
  zIndex++;
  document.querySelector("#boligerne").style.zIndex = zIndex;
  document.querySelectorAll("nav div:nth-child(2) article").forEach((div) => {
    div.style.opacity = ".5";
  })
  article5.style.opacity = "1";
}
