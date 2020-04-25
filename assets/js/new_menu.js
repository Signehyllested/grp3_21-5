document.addEventListener("DOMContentLoaded", start_menu);

function start_menu() {
  hentJSON_ocat();
  hentJSON_ucat();
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
}

const urlParams_menu = new URLSearchParams(window.location.search);
const slug_menu = urlParams_menu.get("slug");









let URLend_ocat = "categories";
let endpoint_ocat = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_ocat}`;
let retter_ocat = [];

async function hentJSON_ocat() {

  const response_ocat = await fetch(endpoint_ocat);
  retter_ocat = await response_ocat.json();
  visRetter_ocat();
}

function visRetter_ocat() {
  retter_ocat.forEach(cat => {
    if (cat.parent == 0) {
      let article = document.createElement("article");
      let h3 = document.createElement("h3");
      let catName = last(cat.name.split("!"));
      h3.textContent = `${catName}`;
      h3.addEventListener("click", clickCat)
      h3.dataset.catId = `${cat.id}`;
      nav_wrap.appendChild(article);
      article.appendChild(h3);


      let ucat = document.createElement("div");
      ucat.classList.add("underkategori");
      ucat.dataset.ucatId = `${cat.id}`;
      nav.appendChild(ucat);
      let ucat_wrap = document.createElement("div");
      ucat_wrap.dataset.uwcatId = `${cat.id}`;
      ucat.appendChild(ucat_wrap);


      let back = document.createElement("p");
      back.classList.add("back");
      back.style.overflow = "visible";
      ucat_wrap.appendChild(back);
    }
  });
}


let URLend_ucat = `posts?per_page=100`;
let endpoint_ucat = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_ucat}`;
let retter_ucat = [];

async function hentJSON_ucat() {
  const response_ucat = await fetch(endpoint_ucat);
  retter_ucat = await response_ucat.json();
  visRetter_ucat();
}

function visRetter_ucat() {
  retter_ucat.forEach(post => {
    let a = document.createElement("a");
    a.addEventListener("click", () => {
      document.querySelector("#pre").style.transform = "scale(2.5)";
      document.querySelector("#anim").style.transform = "scale(1)";
      document.querySelector("#spinner").style.animationPlayState = "running";
      setTimeout(function () {
        location.href = `21-5.html?slug=${post.slug}`
      }, 500)
    })
    let p = document.createElement("p");
    p.textContent = `${post.title.rendered}`
    document.querySelectorAll(".underkategori div").forEach((uwcat) => {
      if (uwcat.dataset.uwcatId == first(post.categories)) {
        uwcat.appendChild(a);
      }
    })
    a.appendChild(p);
    let underline = document.createElement("div");
    underline.classList.add("underline");
    p.appendChild(underline);
    if (slug_menu == post.slug) {
      p.classList.add("on_this");
      document.querySelectorAll("nav div:nth-child(2) article h3").forEach((article) => {
        article.style.color = "#fff";
      })
      document.querySelectorAll(".underkategori").forEach((ucat) => {
        if (ucat.dataset.ucatId == first(post.categories)) {
          ucat.style.zIndex = zIndex;
        }
      })
      document.querySelectorAll("nav div:nth-child(2) article h3").forEach((h3) => {
        if (h3.dataset.catId == first(post.categories)) {
          h3.style.color = "#CEAD89";
        }
      })
      collapsed = true;
    }
  });
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
  document.querySelector("#spinner").style.animationPlayState = "running";
  setTimeout(function () {
    location.href = `index.html`;
  }, 500)
})
logoContainer.appendChild(logo);

let burger_wrap = document.createElement("main");
burger_wrap.id = "burger_wrap";
if (window.innerWidth > 800) {
  burger_wrap.addEventListener("mouseover", () => {
    document.querySelector("#burger1").classList.remove("burger1_ani_out");
    document.querySelector("#burger2").classList.remove("burger2_ani_out");
    document.querySelector("#burger3").classList.remove("burger3_ani_out");
    document.querySelector("#burger1").classList.add("burger1_hover");
    document.querySelector("#burger2").classList.add("burger2_hover");
    document.querySelector("#burger3").classList.add("burger3_hover");
  })
  burger_wrap.addEventListener("mouseout", () => {
    document.querySelector("#burger1").classList.remove("burger1_hover");
    document.querySelector("#burger2").classList.remove("burger2_hover");
    document.querySelector("#burger3").classList.remove("burger3_hover");
  })
}
let burger1 = document.createElement("article");
burger1.id = "burger1";
let burger2 = document.createElement("article");
burger2.id = "burger2";
let burger3 = document.createElement("article");
burger3.id = "burger3";
let burger4 = document.createElement("article");
burger4.id = "burger4";
let burger5 = document.createElement("article");
burger5.id = "burger5";
burger_wrap.appendChild(burger1);
burger_wrap.appendChild(burger2);
burger_wrap.appendChild(burger3);
burger_wrap.appendChild(burger4);
burger_wrap.appendChild(burger5);
logoContainer.appendChild(burger_wrap);

/*let burger = document.createElement("img");
burger.src = "assets/img/burger3.svg";
burger.alt = "burger menu";
burger.id = "burger";
logoContainer.appendChild(burger);*/

let nav_wrap = document.createElement("div");
nav.appendChild(nav_wrap);

let article1 = document.createElement("article");
let a1 = document.createElement("a");
a1.addEventListener("click", () => {
  document.querySelector("#pre").style.transform = "scale(2.5)";
  document.querySelector("#anim").style.transform = "scale(1)";
  document.querySelector("#spinner").style.animationPlayState = "running";
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









document.addEventListener("DOMContentLoaded", () => {
  burger_wrap.addEventListener("click", menuDown);
})

function menuDown() {
  if (collapsed == true) {
    menuExpand();
  } else if (collapsed == true) {
    menuCollapse();
  }

  burger_wrap.removeEventListener("click", menuDown);
  header.style.transform = "translateY(calc(100vh - 60px)";
  burger_wrap.addEventListener("click", menuUp);


  document.querySelectorAll(".back").forEach((back) => {
    back.addEventListener("click", () => {
      collapsed = false;
      menuCollapse();
    });
  })



  document.querySelector("#burger1").classList.remove("burger1_ani_out");
  document.querySelector("#burger2").classList.remove("burger2_ani_out");
  document.querySelector("#burger3").classList.remove("burger3_ani_out");
  document.querySelector("#burger4").classList.remove("burger4_ani_out");
  document.querySelector("#burger5").classList.remove("burger5_ani_out");

  document.querySelector("#burger1").classList.add("burger1_ani_in");
  document.querySelector("#burger2").classList.add("burger2_ani_in");
  document.querySelector("#burger3").classList.add("burger3_ani_in");
  document.querySelector("#burger4").classList.add("burger4_ani_in");
  document.querySelector("#burger5").classList.add("burger5_ani_in");

  if (window.innerWidth > 800) {
    burger_wrap.addEventListener("mouseover", burgerHoverOver);
    burger_wrap.addEventListener("mouseout", burgerHoverOut);
  }
}

function burgerHoverOver() {
  document.querySelector("#burger_wrap").classList.add("burger_wrap_hover");
}

function burgerHoverOut() {
  document.querySelector("#burger_wrap").classList.remove("burger_wrap_hover");
}

function menuUp() {
  burger_wrap.removeEventListener("click", menuUp);
  header.style.transform = "translateY(0)";
  burger_wrap.addEventListener("click", menuDown);


  document.querySelector("#burger1").classList.remove("burger1_ani_in");
  document.querySelector("#burger2").classList.remove("burger2_ani_in");
  document.querySelector("#burger3").classList.remove("burger3_ani_in");
  document.querySelector("#burger4").classList.remove("burger4_ani_in");
  document.querySelector("#burger5").classList.remove("burger5_ani_in");

  document.querySelector("#burger1").classList.add("burger1_ani_out");
  document.querySelector("#burger2").classList.add("burger2_ani_out");
  document.querySelector("#burger3").classList.add("burger3_ani_out");
  document.querySelector("#burger4").classList.add("burger4_ani_out");
  document.querySelector("#burger5").classList.add("burger5_ani_out");

  setTimeout(function () {
    document.querySelector("#burger1").classList.remove("burger1_ani_out");
    document.querySelector("#burger2").classList.remove("burger2_ani_out");
    document.querySelector("#burger3").classList.remove("burger3_ani_out");
    document.querySelector("#burger4").classList.remove("burger4_ani_out");
    document.querySelector("#burger5").classList.remove("burger5_ani_out");
  }, 1700);


  burger_wrap.removeEventListener("mouseover", burgerHoverOver);
  burger_wrap.removeEventListener("mouseout", burgerHoverOut);
}

let delay = 0.5;
let expanded = false;

function menuExpand() {
  expanded = true;
  if (window.innerWidth > 1200) {
    document.querySelectorAll(".underkategori div").forEach((div) => {
      div.style.transform = "translateX(0px)";
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
    nav_wrap.style.transform = "translateX(-350px)";
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
  expanded = false;
  if (collapsed == false) {
    if (window.innerWidth > 1200) {
      document.querySelectorAll(".underkategori div").forEach((div) => {
        div.style.transform = "translateX(350px)";
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

function clickCat() {
  let catId = this.dataset.catId
  if (expanded == true) {
    collapsed = false;
    menuCollapse();
    setTimeout(function () {
      zIndex++;
      document.querySelectorAll(".underkategori").forEach((ucat) => {
        if (ucat.dataset.ucatId == catId) {
          ucat.style.zIndex = zIndex;
        }
      })
      menuExpand();
    }, 501)
  } else {
    zIndex++;
    document.querySelectorAll(".underkategori").forEach((ucat) => {
      if (ucat.dataset.ucatId == catId) {
        ucat.style.zIndex = zIndex;
      }
    })
    menuExpand();
  }
  document.querySelectorAll("nav div:nth-child(2) article h3").forEach((div) => {
    div.style.color = "#fff";
  })
  this.style.color = "#CEAD89";
}









var first = function (array, n) {
  if (array == null)
    return void 0;
  if (n == null)
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};

var last = function (array, n) {
  if (array == null)
    return void 0;
  if (n == null)
    return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};
