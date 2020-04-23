let container_faq = document.createElement("div");
container_faq.id = "faq";



let URLend_faq_cat = `spg-kategori?per_page=100`;
let endpoint_faq_cat = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_faq_cat}`;
let retter_faq_cat = [];

function start_faq() {
  hentJSON_faq_cat();
}

async function hentJSON_faq_cat() {
  const response_faq_cat = await fetch(endpoint_faq_cat);
  retter_faq_cat = await response_faq_cat.json();
  visRetter_faq_cat();
}

function visRetter_faq_cat() {
  console.log(retter_faq_cat);
  retter_faq_cat.forEach(cat => {
    let faq_cat = document.createElement("div");
    faq_cat.classList.add("faq_cat");
    faq_cat.dataset.catId = `${cat.id}`;
    let faq_over = document.createElement("button");
    faq_over.classList.add("faq_over");
    faq_over.textContent = `${cat.name}`;
    faq_cat.appendChild(faq_over);
    container_faq.appendChild(faq_cat);
    document.querySelector("#fill").appendChild(container_faq);
  });
  hentJSON_faq_spg();
}





let URLend_faq_spg = `spg?per_page=100`;
let endpoint_faq_spg = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_faq_spg}`;
let retter_faq_spg = [];

async function hentJSON_faq_spg() {
  const response_faq_spg = await fetch(endpoint_faq_spg);
  retter_faq_spg = await response_faq_spg.json();
  visRetter_faq_spg();
}

function visRetter_faq_spg() {
  console.log(retter_faq_spg);
  retter_faq_spg.forEach(spg => {
    let faq_spg_wrap = document.createElement("div");
    faq_spg_wrap.classList.add("faq_spg_wrap");
    let faq_under = document.createElement("button");
    faq_under.classList.add("faq_under");
    faq_under.textContent = `${spg.title.rendered}`;
    faq_under.addEventListener("click", clickUnder);
    let faq_p = document.createElement("p");
    faq_p.classList.add("faq_p");
    faq_p.textContent = `${spg.forklaring}`;
    faq_p.style.height = "0";
    faq_p.style.padding = "0 20px";
    faq_spg_wrap.appendChild(faq_under);
    faq_spg_wrap.appendChild(faq_p);

    document.querySelectorAll(".faq_cat").forEach((cate) => {
      if (cate.dataset.catId == spg["spg-kategori"]) {
        cate.appendChild(faq_spg_wrap);
      }
    })
    document.querySelector("#fill").appendChild(container_faq);
  });
}

function clickUnder() {
  let parent = this.parentElement;
  document.querySelectorAll(".faq_p").forEach((p) => {
    p.style.height = `0`;
    if (window.innerWidth > 800) {
      p.style.padding = "0 20px";
    } else {
      p.style.padding = "0 10px";
    }
  })
  if (this.parentElement.querySelector("p").clientHeight == "0") {
    this.classList.add("valgt_spg");
    parent.querySelector("p").style.height = "auto";
    let parentHeight = parent.querySelector("p").clientHeight;
    parent.querySelector("p").style.height = "0px";
    console.log(parent.querySelector("p").clientHeight);
    if (window.innerWidth > 800) {
      parent.querySelector("p").style.height = `${parentHeight + 40}px`;
      parent.querySelector("p").style.padding = "20px";
    } else {
      parent.querySelector("p").style.height = `${parentHeight + 20}px`;
      parent.querySelector("p").style.padding = "10px";
    }
  } else {
    parent.querySelector("p").style.height = `0`;
    if (window.innerWidth > 800) {
      parent.querySelector("p").style.padding = "0 20px";
    } else {
      parent.querySelector("p").style.padding = "0 10px";
    }
    this.classList.remove("valgt_spg");
  }
}
