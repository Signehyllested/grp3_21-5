//let url_dest_pic = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_review}`;
let url_dest_pic;
let picArray = [];


let theJSON;
let numberOfPicsInCarousel;
let caroCurrentNum = 0;

//document.addEventListener("DOMContentLoaded", tjekDestination);

function tjekDestination() {
  //console.log("tjek dest");
  if (slug == "toscana") {
    //console.log("tjek tosc");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/707";
    startCaro();
  }
  if (slug == "paris") {
    //console.log("tjek paris");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/709";
    startCaro();
  }
  if (slug == "sydspanien") {
    //console.log("tjek s s");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/722";
    startCaro();
  }
  if (slug == "chamonix") {
    //console.log("tjek cha");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/723";
    startCaro();
  }
  if (slug == "mallorca") {
    //console.log("tjek mall");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/724";
    startCaro();
  }
  if (slug == "sydfrankrig") {
    //console.log("tjek s f");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/725";
    startCaro();
  }
  if (slug == "barcelona") {
    //console.log("tjek barce");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/726";
    startCaro();
  }
  if (slug == "rom") {
    //console.log("tjek rom");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/727";
    startCaro();
  }
  if (slug == "new-york") {
    //console.log("tjek ny");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/728";
    startCaro();
  }
  if (slug == "vi-skaber-hjem") {
    //console.log("tjek vi skaber hjem");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/boligerne/1016";
    startCaro();
  }
  if (slug == "indretning") {
    //console.log("tjek indretning");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/boligerne/1023";
    startCaro();
  }
  if (slug == "21-5-dk10-family") {
    //console.log("tjek gensalg fam");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/koeb_af_andel/1055";
    startCaro();
  }
  if (slug == "21-5-dk21-large") {
    //console.log("tjek gensalg large");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/koeb_af_andel/1063";
    startCaro();
  }
  if (forside == true) {
    //console.log("tjek gensalg large");
    url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/boligerne/1454";
    startCaro();
  }
  console.log(forside);
}

function startCaro() {
  hentJSON_dest_pic();

}

async function hentJSON_dest_pic() {
  const response = await fetch(url_dest_pic);

  theJSON = await response.json();
  //console.log(theJSON);
  buildCarousel();
}


function buildCarousel() {
  //console.log("build skeleton");
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

  document.querySelector("#carousel_fill").appendChild(caroMain);

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
      autoplay_car = false;
      navigate();
    })
  })
  setBtns();

  document.querySelector(".fwd").addEventListener("click", () => {
    fwd();
    autoplay_car = false;
  });
  document.querySelector(".bwd").addEventListener("click", () => {
    bwd();
    autoplay_car = false;
  });

    autoplayCarouselForward();

}

function scrollFunction() {
  document.querySelectorAll(".legend_pic_container section").forEach(each => {
    each.classList.remove("legend_border");
  })

  caroCurrentNum = Math.round(document.querySelector("#the_container").scrollLeft / document.querySelector(".caro_imgs").width);

  document.querySelector(`.legend_pic_container section:nth-child(${caroCurrentNum+1})`).classList.add("legend_border");

  setBtns();
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


  if (caroCurrentNum < numberOfPicsInCarousel - 1) {
    document.querySelector(".fwd").classList.remove("grayscale_f");
  } else {
    document.querySelector(".fwd").classList.add("grayscale_f");
  }
  if (caroCurrentNum > 0) {
    document.querySelector(".bwd").classList.remove("grayscale_b");
  } else {
    document.querySelector(".bwd").classList.add("grayscale_b");
  }
}

function swiped_car(el, d) {

  autoplay_car = false;
  if (d == "l") {
    fwd();
  } else if (d == "r") {
    bwd();
  }
}


let autoplay_car = true;

function autoplayCarouselForward() {
  setTimeout(function () {
    if (autoplay_car == true) {
      if (caroCurrentNum < numberOfPicsInCarousel - 1) {
        fwd();
        autoplayCarouselForward();
      } else {
        autoplayCarouselBackward();
      }
      if (caroCurrentNum < numberOfPicsInCarousel - 1) {
        document.querySelector(".fwd").classList.remove("grayscale_f");
      } else {
        document.querySelector(".fwd").classList.add("grayscale_f");
      }
      if (caroCurrentNum > 0) {
        document.querySelector(".bwd").classList.remove("grayscale_b");
      } else {
        document.querySelector(".bwd").classList.add("grayscale_b");
      }
    }
  }, 4000)
}

function autoplayCarouselBackward() {
  setTimeout(function () {
    if (autoplay == true) {
      if (caroCurrentNum > 0) {
        bwd();
        autoplayCarouselBackward();
      } else {
        autoplayCarouselForward();
      }
      if (caroCurrentNum < numberOfPicsInCarousel - 1) {
        document.querySelector(".fwd").classList.remove("grayscale_f");
      } else {
        document.querySelector(".fwd").classList.add("grayscale_f");
      }
      if (caroCurrentNum > 0) {
        document.querySelector(".bwd").classList.remove("grayscale_b");
      } else {
        document.querySelector(".bwd").classList.add("grayscale_b");
      }
    }
  }, 4000)
}
