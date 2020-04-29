let URLend_getcat = `posts?slug=${slug}`;
let endpoint_getcat = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_getcat}`;
let json_getcat = [];
let category = 0;

document.addEventListener("DOMContentLoaded", start);

function start() {
  hentJSON_getcat();
}

async function hentJSON_getcat() {
  const response_getcat = await fetch(endpoint_getcat);
  json_getcat = await response_getcat.json();
  visIndhold_getcat();
}

function visIndhold_getcat() {
  json_getcat.forEach(cat => {
    var last = function (array, n) {
      if (array == null)
        return void 0;
      if (n == null)
        return array[array.length - 1];
      return array.slice(Math.max(array.length - n, 0));
    }
    category = last(cat.categories);
  });
  hentJSON_showcat();
}

let URLend_showcat = `categories`;
let endpoint_showcat = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_showcat}`;

async function hentJSON_showcat() {
  const response_showcat = await fetch(endpoint_showcat);
  json_showcat = await response_showcat.json();
  visIndhold_showcat();
}

let running = true;

function visIndhold_showcat() {
  json_showcat.forEach(cat => {
    if (cat.parent != 0) {
      if (category == cat.id) {
        hentJSON_showuk();
      }
    }
  });
}



let uk_wrap = document.createElement("div");
uk_wrap.id = "uk_wrap";
let main_uk = document.querySelector("main");
main_uk.insertBefore(uk_wrap, main_uk.childNodes[1]);





let json_showuk = [];

async function hentJSON_showuk() {

  let URLend_showuk = `posts?categories=${category}`;
  let endpoint_showuk = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_showuk}`;

  const response_showuk = await fetch(endpoint_showuk);
  json_showuk = await response_showuk.json();
  visIndhold_showuk();
}

function visIndhold_showuk() {

  json_showuk.forEach(uk => {
    let om_ua = document.createElement("button");
    om_ua.textContent = uk.title.rendered;
    om_ua.addEventListener("click", () => {
      document.querySelector("#pre").style.transform = "scale(2.5)";
      document.querySelector("#anim").style.transform = "scale(1)";
      document.querySelector("#spinner").style.animationPlayState = "running";
      setTimeout(function () {
        location.href = `21-5.html?slug=${uk.slug}`;
      }, 500)
    })
    if (uk.slug == slug) {
      om_ua.classList.add("this_site");
      om_ua.style.cursor = "auto";
    }
    uk_wrap.appendChild(om_ua);
  });
}
