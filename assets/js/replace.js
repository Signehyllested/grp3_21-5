const urlParams_menu = new URLSearchParams(window.location.search);
const slug_menu = urlParams_menu.get("slug");


let URLend_ocat = "categories?per_page=4";
let endpoint_ocat = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_ocat}`;
let retter_ocat = [];

async function hentJSON_ocat() {

  const response_ocat = await fetch(endpoint_ocat);
  retter_ocat = await response_ocat.json();
  visRetter_ocat();
}

function visRetter_ocat() {
  retter_ocat.forEach(cat => {
    let article = document.createElement("article");
    article.dataset.catId = `${cat.id}`;
    let h3 = document.createElement("h3");
    h3.textContent = `${cat.name}`;
    h3.addEventListener("click", clickCat)
    h3.dataset.catId = `${cat.id}`;
    nav_wrap.appendChild(article2);
    article.appendChild(h3);


    let ucat = document.createElement("div");
    ucat.classList.add("underkategori");
    ucat.dataset.ucatId = `${cat.id}`;
    nav.appendChild(ucat);
    let ucat_wrap = document.createElement("div");
    ucat_wrap.dataset.uwcatId = `${cat.id}`;
    ucat.appendChild(ucat_wrap);
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
  console.log(retter_ucat);
  retter_ucat.forEach(post => {
    let a = document.createElement("a");
    a.addEventListener("click", () => {
      document.querySelector("#pre").style.transform = "scale(2.5)";
      document.querySelector("#anim").style.transform = "scale(1)";
      setTimeout(function () {
        location.href = `21-5.html?slug=${post.slug}`
      }, 500)
    })
    let p = document.createElement("p");
    p.textContent = `${post.title.rendered}`
    kob_din_andel_wrap.appendChild(a);
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
        if (ucat.dataset.ucatId == post[categories]) {
          ucat.style.zIndex = zIndex;
        }
      })
      document.querySelectorAll("nav div:nth-child(2) article h3").forEach((h3) => {
        if (h3.dataset.catId == post[categories]) {
          h3.style.color = "#CEAD89";
        }
      })
      collapsed = true;
    }
  });
}
