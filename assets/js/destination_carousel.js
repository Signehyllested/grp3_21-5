const urlParams_carousel = new URLSearchParams(window.location.search);
const slug_carousel = urlParams_carousel.get("slug");

//let url_dest_pic = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_review}`;
let url_dest_pic;
let picArray = [];


let theJSON;
let numberOfPicsInCarousel;
let caroCurrentNum = 0;

//document.addEventListener("DOMContentLoaded", tjekDestination);

function tjekDestination() {
  console.log("tjek dest");
  if (slug_carousel == "toscana") {
    console.log("tjek tosc");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/707";
    startCaro();
  }
  if (slug_carousel == "paris") {
    console.log("tjek paris");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/709";
    startCaro();
  }
  if (slug_carousel == "sydspanien") {
    console.log("tjek s s");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/722";
    startCaro();
  }
  if (slug_carousel == "chamonix") {
    console.log("tjek cha");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/723";
    startCaro();
  }
  if (slug_carousel == "mallorca") {
    console.log("tjek mall");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/724";
    startCaro();
  }
  if (slug_carousel == "sydfrankrig") {
    console.log("tjek s f");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/725";
    startCaro();
  }
  if (slug_carousel == "barcelona") {
    console.log("tjek barce");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/726";
    startCaro();
  }
  if (slug_carousel == "rom") {
    console.log("tjek rom");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/727";
    startCaro();
  }
  if (slug_carousel == "new-york") {
    console.log("tjek ny");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/72";
    startCaro();
  }
}

function startCaro() {
  hentJSON_dest_pic();

}

async function hentJSON_dest_pic() {
  const response = await fetch(url_dest_pic);

  theJSON = await response.json();
  console.log(theJSON);
  buildCarousel();
}


console.log("build skeleton");
let caroTemp = document.createElement("div");


let caroMain = document.createElement("div");
let carousel = document.createElement("div");
carousel.classList.add("carousel");
let carouselInner = document.createElement("div");
carouselInner.classList.add("carousel_inner");
let caroContainer = document.createElement("div");
caroContainer.id = "the_container";
let pilBwd = document.createElement("img");
pilBwd.src = "assets/img/arrow.svg";
pilBwd.classList.add("bwd");
let pilFwd = document.createElement("img");
pilFwd.src = "assets/img/arrow.svg";
pilFwd.classList.add("fwd");
let legendPicContainer = document.createElement("div");
legendPicContainer.classList.add("legend_pic_container");

caroMain.appendChild(carousel);
carousel.appendChild(carouselInner);
carouselInner.appendChild(pilBwd);
carouselInner.appendChild(caroContainer);
carouselInner.appendChild(pilFwd);
carousel.appendChild(legendPicContainer);

document.querySelector("main").appendChild(caroMain);


function buildCarousel() {
  numberOfPicsInCarousel = theJSON.billede.length;
  theJSON.billede.forEach((billede, index) => {

    let caroSection = document.createElement("section");
    let caroImg = document.createElement("img");
    caroImg.classList.add("caro_imgs");
    caroImg.src = billede.guid;
    caroContainer.appendChild(caroSection);
    caroSection.appendChild(caroImg);
    caroSection.dataset.myIndex = index;


    let caroSection2 = document.createElement("section");
    let caroImg2 = document.createElement("img");
    caroImg2.classList.add("caro_imgs");
    caroImg2.src = billede.guid;
    legendPicContainer.appendChild(caroSection2);
    caroSection2.appendChild(caroImg2);
    caroSection2.dataset.myIndex = index;
    document.querySelector("#carousel_fill").appendChild(caroMain);

  })
  document.querySelector(".legend_pic_container section").classList.add("legend_border");
  document.querySelector("#the_container").addEventListener("scroll", scrollFunction);

  document.querySelectorAll(".legend_pic_container section").forEach((sec) => {
    sec.addEventListener("click", () => {
      caroCurrentNum = sec.dataset.myIndex;
      navigate();
    })
  })
  setBtns();
}

function scrollFunction() {
  document.querySelectorAll(".legend_pic_container section").forEach(each => {
    each.classList.remove("legend_border");
  })
  console.log("scrolling");
  console.log(caroCurrentNum);

  caroCurrentNum = Math.round(document.querySelector("#the_container").scrollLeft / document.querySelector(".caro_imgs").width);
  console.log(caroCurrentNum);

  document.querySelector(`.legend_pic_container section:nth-child(${caroCurrentNum+1})`).classList.add("legend_border");

  setBtns();
}

function legendClick(evt) {
  console.log("legend click", evt.currentTarget);
  caroCurrentNum = evt.currentTarget.dataset.myIndex;
  navigate();

}

function fwd() {
  if (caroCurrentNum < numberOfPicsInCarousel - 1) {
    caroCurrentNum++;
    navigate();
  }
}

function bwd() {
  if (caroCurrentNum > 0) {

    caroCurrentNum--;
    navigate();
  }
}

function navigate() {
  document.querySelector("#the_container").scrollTo({
    left: caroCurrentNum * document.querySelector(".caro_imgs").width,
    behavior: "smooth"
  })
}

function setBtns() {
  detectswipe("the_container", swiped_car);

  document.querySelector(".fwd").addEventListener("click", fwd);
  document.querySelector(".bwd").addEventListener("click", bwd);

  if (caroCurrentNum < numberOfPicsInCarousel - 1) {
    document.querySelector(".fwd").classList.remove("grayscale_f");
    document.querySelector(".fwd").style.cursor = "pointer";
  } else {
    document.querySelector(".fwd").classList.add("grayscale_f");
    document.querySelector(".fwd").style.cursor = "default";
  }
  if (caroCurrentNum > 0) {
    document.querySelector(".bwd").classList.remove("grayscale_b");
    document.querySelector(".bwd").style.cursor = "pointer";
  } else {
    document.querySelector(".bwd").classList.add("grayscale_b");
    document.querySelector(".bwd").style.cursor = "default";
  }
}



function swiped_car(el, d) {
  console.log("you swiped on element with id '" + el + "' to " + d + " direction");

  if (d == "l") {
    fwd();
  } else if (d == "r") {
    bwd();
  }
}
