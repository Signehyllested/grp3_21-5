const urlParams_getcat = new URLSearchParams(window.location.search);
const slug_getcat = urlParams_getcat.get("slug");
let URLend_getcat = `posts?slug=${slug_getcat}`;
let endpoint_getcat = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_getcat}`;
let retter_getcat = [];
let category = 0;

document.addEventListener("DOMContentLoaded", start);

function start() {
  hentJSON_getcat();
}

async function hentJSON_getcat() {
  const response_getcat = await fetch(endpoint_getcat);
  retter_getcat = await response_getcat.json();
  visRetter_getcat();
}

function visRetter_getcat() {
  retter_getcat.forEach(cat => {
    var last = function (array, n) {
      if (array == null)
        return void 0;
      if (n == null)
        return array[array.length - 1];
      return array.slice(Math.max(array.length - n, 0));
    }
    category = last(cat.categories);
    if (category < 8) {
      category = 0;
    }
  });
  hentJSON_showuk();
}



let uk_wrap = document.createElement("div");
uk_wrap.id = "uk_wrap";
let main_uk = document.querySelector("main");
main_uk.insertBefore(uk_wrap, main_uk.childNodes[0]);





let retter_showuk = [];

async function hentJSON_showuk() {

  let URLend_showuk = `posts?categories=${category}`;
  let endpoint_showuk = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_showuk}`;

  const response_showuk = await fetch(endpoint_showuk);
  retter_showuk = await response_showuk.json();
  visRetter_showuk();
}

function visRetter_showuk() {

  retter_showuk.forEach(uk => {
    let om_ua = document.createElement("button");
    om_ua.textContent = uk.title.rendered;
    om_ua.addEventListener("click", () => {
      document.querySelector("#pre").style.transform = "scale(2.5)";
      document.querySelector("#anim").style.transform = "scale(1)";
      setTimeout(function () {
        location.href = `21-5.html?slug=${uk.slug}`
      }, 500)
    })
    if (uk.slug == slug_getcat) {
      om_ua.classList.add("this_site");
      om_ua.style.cursor = "auto";
    }
    uk_wrap.appendChild(om_ua);
  });
}
