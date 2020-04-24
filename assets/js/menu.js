console.log("menu.js");


document.addEventListener("DOMContentLoaded", start_menu);

function start_menu() {
  hentJSON_kob_din_andel();
  hentJSON_om_21_5();
  hentJSON_destinationerne();
  hentJSON_boligerne();
  getLocation();
}

var locations;
let thisLocation;
let collapsed = false;

function getLocation() {
  locations = location.href.split('/');
  var last = function (array, n) {
    if (array == null)
      return void 0;
    if (n == null)
      return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
  }
  thisLocation = last(locations);
  console.log(thisLocation);
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
      document.querySelector("#pre").style.transform = "scale(2.5)";
      document.querySelector("#spinner").style.transform = "scale(1)";
      document.querySelector("#spinner_base").style.transform = "scale(1)";

      setTimeout(function () {
        location.href = `21-5.html?slug=${kobpkt.slug}`
      }, 500)
    })
    let om_up = document.createElement("p");
    let om_up_i = document.createTextNode(kobpkt.title.rendered);
    kob_din_andel_wrap.appendChild(om_ua);
    om_ua.appendChild(om_up);
    om_up.appendChild(om_up_i);
    let underline = document.createElement("div");
    underline.classList.add("underline");
    om_up.appendChild(underline);
    if (slug_menu == kobpkt.slug) {
      om_up.classList.add("on_this");
      document.querySelectorAll("nav div:nth-child(2) article h3").forEach((article) => {
        article.style.color = "#fff";
      })
      document.querySelector("#kob_din_andel").style.zIndex = zIndex;
      document.querySelector("#kob_click").style.color = "#CEAD89";
      collapsed = true;
    }
  });
  let back_om = document.createElement("p");
  back_om.classList.add("back");
  back_om.style.overflow = "visible";
  kob_din_andel_wrap.appendChild(back_om);
  menuCollapse();
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
      document.querySelector("#pre").style.transform = "scale(2.5)";
      document.querySelector("#spinner").style.transform = "scale(1)";
      document.querySelector("#spinner_base").style.transform = "scale(1)";

      setTimeout(function () {
        location.href = `21-5.html?slug=${ompkt.slug}`
      }, 500)
    })
    let om_up = document.createElement("p");
    let om_up_i = document.createTextNode(ompkt.title.rendered);
    om_21_5_wrap.appendChild(om_ua);
    om_ua.appendChild(om_up);
    om_up.appendChild(om_up_i);
    let underline = document.createElement("div");
    underline.classList.add("underline");
    om_up.appendChild(underline);
    if (slug_menu == ompkt.slug) {
      om_up.classList.add("on_this");
      document.querySelectorAll("nav div:nth-child(2) article h3").forEach((article) => {
        article.style.color = "#fff";
      })
      document.querySelector("#om_21-5").style.zIndex = zIndex;
      document.querySelector("#om_click").style.color = "#CEAD89";
      collapsed = true;
    }
  });
  let back_om = document.createElement("p");
  back_om.classList.add("back");
  back_om.style.overflow = "visible";
  om_21_5_wrap.appendChild(back_om);
  menuCollapse();
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
      document.querySelector("#pre").style.transform = "scale(2.5)";
      document.querySelector("#anim").style.transform = "scale(1)";
      setTimeout(function () {
        location.href = `21-5.html?slug=${destpkt.slug}`
      }, 500)
    })
    let om_up = document.createElement("p");
    let om_up_i = document.createTextNode(destpkt.title.rendered);
    destinationerne_wrap.appendChild(om_ua);
    om_ua.appendChild(om_up);
    om_up.appendChild(om_up_i);
    let underline = document.createElement("div");
    underline.classList.add("underline");
    om_up.appendChild(underline);
    if (slug_menu == destpkt.slug) {
      om_up.classList.add("on_this");
      document.querySelectorAll("nav div:nth-child(2) article h3").forEach((article) => {
        article.style.color = "#fff";
      })
      document.querySelector("#destinationerne").style.zIndex = zIndex;
      document.querySelector("#dest_click").style.color = "#CEAD89";
      collapsed = true;
    }
  });
  let back_om = document.createElement("p");
  back_om.classList.add("back");
  back_om.style.overflow = "visible";
  destinationerne_wrap.appendChild(back_om);
  menuCollapse();
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
      document.querySelector("#pre").style.transform = "scale(2.5)";
      document.querySelector("#anim").style.transform = "scale(1)";
      setTimeout(function () {
        location.href = `21-5.html?slug=${boligpkt.slug}`
      }, 500)
    })
    let om_up = document.createElement("p");
    let om_up_i = document.createTextNode(boligpkt.title.rendered);
    boligerne_wrap.appendChild(om_ua);
    om_ua.appendChild(om_up);
    om_up.appendChild(om_up_i);
    let underline = document.createElement("div");
    underline.classList.add("underline");
    om_up.appendChild(underline);
    if (slug_menu == boligpkt.slug) {
      om_up.classList.add("on_this");
      document.querySelectorAll("nav div:nth-child(2) article h3").forEach((article) => {
        article.style.color = "#fff";
      })
      document.querySelector("#boligerne").style.zIndex = zIndex;
      document.querySelector("#bolig_click").style.color = "#CEAD89";
      collapsed = true;
    }
  });
  let back_om = document.createElement("p");
  back_om.classList.add("back");
  back_om.style.overflow = "visible";
  boligerne_wrap.appendChild(back_om);
  menuCollapse();
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
logo.addEventListener("click", () => {
  document.querySelector("#pre").style.transform = "scale(2.5)";
  document.querySelector("#anim").style.transform = "scale(1)";
  setTimeout(function () {
    location.href = `index.html`;
  }, 500)
})
let burger = document.createElement("img");
burger.src = "assets/img/burger3.svg";
burger.alt = "burger menu";
burger.id = "burger";
logoContainer.appendChild(logo);
logoContainer.appendChild(burger);

let nav_wrap = document.createElement("div");
nav.appendChild(nav_wrap);

let article1 = document.createElement("article");
let a1 = document.createElement("a");
a1.addEventListener("click", () => {
  document.querySelector("#pre").style.transform = "scale(2.5)";
  document.querySelector("#anim").style.transform = "scale(1)";
  setTimeout(function () {
    location.href = `index.html`;
  }, 500)
})
let h3_1 = document.createElement("h3");
let page1 = document.createTextNode("Forside");
nav_wrap.appendChild(article1);
article1.appendChild(a1);
a1.appendChild(h3_1);
h3_1.appendChild(page1);

let article2 = document.createElement("article");
let h3_2 = document.createElement("h3");
h3_2.id = "kob_click"
let page2 = document.createTextNode("Køb af andel");
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
  h3_2.addEventListener("click", kobClick);
  h3_3.addEventListener("click", omClick);
  h3_4.addEventListener("click", destClick);
  h3_5.addEventListener("click", boligClick);
})

function menuDown() {
  if (collapsed == true) {
    menuExpand();
  } else if (collapsed == true) {
    menuCollapse();
  }

  burger.removeEventListener("click", menuDown);
  header.style.transform = "translateY(calc(100vh - 60px)";
  burger.addEventListener("click", menuUp);


  document.querySelectorAll(".back").forEach((back) => {
    back.addEventListener("click", () => {
      collapsed = false;
      menuCollapse();
    });
  })
}

function menuUp() {
  burger.removeEventListener("click", menuUp);
  header.style.transform = "translateY(0)";
  burger.addEventListener("click", menuDown);
}

let delay = 0.5;
let expanded = false;

function menuExpand() {
  console.log("menu expand");
  expanded = true;
  if (window.innerWidth > 1200) {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(0)";
      delay = .1;
      div.querySelectorAll("p").forEach((ptag) => {
        ptag.style.transition = `.5s cubic-bezier(.5, .3, .25, 1) ${delay}s`;
        delay = delay + 0.04;
        ptag.style.transform = "translateX(0)";
      })
    })
    setTimeout(function () {
      document.querySelectorAll(".underkategori div").forEach((div) => {
        div.querySelectorAll("p").forEach((ptag) => {
          ptag.style.transition = `.5s cubic-bezier(.5, .3, .25, 1)`;
        })
      })
    }, 1000)
    nav_wrap.style.transform = "translateX(-330px)";
  } else {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(-20px)";
      delay = .1;
      div.querySelectorAll("p").forEach((ptag) => {
        ptag.style.transition = `.5s cubic-bezier(.5, .3, .25, 1) ${delay}s`;
        delay = delay + 0.04;
        ptag.style.transform = "translateX(0)";
      })
    })
    setTimeout(function () {
      document.querySelectorAll(".underkategori div").forEach((div) => {
        div.querySelectorAll("p").forEach((ptag) => {
          ptag.style.transition = `.5s cubic-bezier(.5, .3, .25, 1)`;
        })
      })
    }, 1000)
    nav_wrap.style.transform = "translateX(-100px)";
  }
}

function menuCollapse() {
  console.log("menu collapse");
  expanded = false;
  if (collapsed == false) {
    if (window.innerWidth > 1200) {
      document.querySelectorAll(".underkategori div").forEach((div) => {
        div.style.transform = "translateX(330px)";
        delay = .5;
        div.querySelectorAll("p").forEach((ptag) => {
          ptag.style.transition = `${delay}s cubic-bezier(.5, .3, .25, 1)`;
          ptag.style.transform = "translateX(330px)";
        })
      })
      nav_wrap.style.transform = "translateX(0)";
    } else {
      document.querySelectorAll(".underkategori div").forEach((div) => {
        div.style.transform = "translateX(100%)";
        delay = .5;
        div.querySelectorAll("p").forEach((ptag) => {
          ptag.style.transition = `${delay}s cubic-bezier(.5, .3, .25, 1)`;
          ptag.style.transform = "translateX(330px)";
        })
      })
      nav_wrap.style.transform = "translateX(0)";
    }
    document.querySelectorAll("nav div:nth-child(2) article h3").forEach((div) => {
      div.style.color = "#fff";
    })
  }
}

let zIndex = 5;

function kobClick() {
  console.log("kob click");
  if (expanded == true) {
    collapsed = false;
    menuCollapse();
    setTimeout(function () {
      zIndex++;
      document.querySelector("#kob_din_andel").style.zIndex = zIndex;
      menuExpand();
    }, 501)
  } else {
    zIndex++;
    document.querySelector("#kob_din_andel").style.zIndex = zIndex;
    menuExpand();
  }
  document.querySelectorAll("nav div:nth-child(2) article h3").forEach((div) => {
    div.style.color = "#fff";
  })
  article2.querySelector("h3").style.color = "#CEAD89";
}

function omClick() {
  console.log("om click")
  if (expanded == true) {
    collapsed = false;
    menuCollapse();
    setTimeout(function () {
      zIndex++;
      document.querySelector("#om_21-5").style.zIndex = zIndex;
      menuExpand();
    }, 501)
  } else {
    zIndex++;
    document.querySelector("#om_21-5").style.zIndex = zIndex;
    menuExpand();
  }
  document.querySelectorAll("nav div:nth-child(2) article h3").forEach((div) => {
    div.style.color = "#fff";
  })
  article3.querySelector("h3").style.color = "#CEAD89";
}

function destClick() {
  console.log("dest click")
  if (expanded == true) {
    collapsed = false;
    menuCollapse();
    setTimeout(function () {
      zIndex++;
      document.querySelector("#destinationerne").style.zIndex = zIndex;
      menuExpand();
    }, 501)
  } else {
    zIndex++;
    document.querySelector("#destinationerne").style.zIndex = zIndex;
    menuExpand();
  }
  document.querySelectorAll("nav div:nth-child(2) article h3").forEach((div) => {
    div.style.color = "#fff";
  })
  article4.querySelector("h3").style.color = "#CEAD89";
}

function boligClick() {
  console.log("bolig click")
  if (expanded == true) {
    collapsed = false;
    menuCollapse();
    setTimeout(function () {
      zIndex++;
      document.querySelector("#boligerne").style.zIndex = zIndex;
      menuExpand();
    }, 501)
  } else {
    zIndex++;
    document.querySelector("#boligerne").style.zIndex = zIndex;
    menuExpand();
  }
  document.querySelectorAll("nav div:nth-child(2) article h3").forEach((div) => {
    div.style.color = "#fff";
  })
  article5.querySelector("h3").style.color = "#CEAD89";
}
