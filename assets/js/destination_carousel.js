const urlParams_carousel = new URLSearchParams(window.location.search);
const slug_carousel = urlParams_carousel.get("slug");

//let url_dest_pic = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_review}`;
let url_dest_pic;
let picArray = [];


let theJSON;
let numberOfPicsInCarousel;
let caroCurrentNum = 0;

document.addEventListener("DOMContentLoaded", tjekDestination);

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
    if (slug_carousel == "barcalona") {
        console.log("tjek barca");
        url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/726";
        startCaro();
    }
    if (slug_carousel == "rom") {
        console.log("tjek rom");
        url_dest_pic = "http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/destination_billede/727";
        startCaro();
    }
    if (slug_carousel == "newyork") {
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

function buildCarousel() {
    numberOfPicsInCarousel = theJSON.billede.length;
    theJSON.billede.forEach((billede, index) => {

        let caroTemp = document.createElement("template");
        caroTemp.classList.add("caro_temp");
        let caroSection = document.createElement("div");
        let caroImg = document.createElement("img");
        //caroImg.classList.add("caro_imgs");
        caroTemp.appendChild(caroSection);
        caroSection.appendChild(caroImg);

        let caroMain = document.createElement("template");
        let carousel = document.createElement("div");
        carousel.classList.add("carousel");
        let carouselInner = document.createElement("div");
        carouselInner.classList.add("carousel_inner");
        let bwdBtn = document.createElement("div");
        bwdBtn.classList.add("bwd");
        let pilBwd = document.createElement("p");
        pilBwd.textContent = "<";
        let caroContainer = document.createElement("div");
        caroContainer.classList.add("the_container");
        let fwdBtn = document.createElement("div");
        bwdBtn.classList.add("fwd");
        let pilFwd = document.createElement("p");
        pilFwd.textContent = ">";
        let legendPicContainer = document.createElement("div");
        legendPicContainer.classList.add("legend_pic_container");

        caroMain.appendChild(carousel);
        carousel.appendChild(carouselInner);
        carouselInner.appendChild(bwdBtn);
        bwdBtn.appendChild(pilBwd);
        carouselInner.appendChild(caroContainer);
        carouselInner.appendChild(fwdBtn);
        fwdBtn.appendChild(pilFwd);
        carousel.appendChild(legendPicContainer);

        const theClone = document.querySelector(caroTemp).cloneNode(true).content;
        const secondClone = document.querySelector(caroTemp).cloneNode(true).content;

        theClone.querySelector("img").src = billede.guid;
        secondClone.querySelector("img").src = billede.guid;
        secondClone.querySelector("section").dataset.myIndex = index;
        document.querySelector(".the_container").appendChild(theClone);
        document.querySelector(".legend_pic_container").appendChild(secondClone);

    })

    //document.querySelector(".legend_pic_container section").classList.add("legend_border");



}
