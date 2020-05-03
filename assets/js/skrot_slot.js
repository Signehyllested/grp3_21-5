let URLend_skrot_slot = `skrot_slot?_embed`;
let endpoint_skrot_slot = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_skrot_slot}`;
let json_skrot_slot = [];
let container_skrot_slot_fill = document.createElement("div");
container_skrot_slot_fill.id = "container_skrot_slot_fill";
let url_skrot_detalje;
let detaljeSec;
let skrot_detalje_id;
let numberOfPicsInDetalje;
let detaljeCurrentNum = 0;
let detaljeJSON;
let caroSection;
let caroImg;
let caroSection2;
let caroImg2;
let caroContainer;
let tjekUnderCaro = 0;


function start_skrot_slot() {
    hentJSON_skrot_slot();

    runSkrotDetalje();


}

async function hentJSON_skrot_slot() {
    const response_skrot_slot = await fetch(endpoint_skrot_slot);
    json_skrot_slot = await response_skrot_slot.json();
    visIndhold_skrot_slot();
    console.log(json_skrot_slot);
}

function visIndhold_skrot_slot() {
    console.log(json_skrot_slot);

    json_skrot_slot.forEach(skrot_slot => {
        let container_skrot_slot = document.createElement("article");
        container_skrot_slot.classList.add("container_skrot_slot");
        let h2_skrot_slot = document.createElement("h2");
        h2_skrot_slot.textContent = `${skrot_slot.title.rendered}`;

        let img_wrap_skrot = document.createElement("div");
        img_wrap_skrot.classList.add("img_wrap_skrot");

        let tekstwrap_skrot_slot = document.createElement("div");
        tekstwrap_skrot_slot.classList.add("tekstwrap_skrot_slot")

        let tekst_skrot_slot = document.createElement("p");
        tekst_skrot_slot.innerHTML = "Tryk her og se flere billeder";
        let img_skrot_slot = document.createElement("img");

        //img_skrot_slot.src = `${skrot_slot.billede.guid}`;
        img_skrot_slot.src = `${skrot_slot._embedded['wp:featuredmedia'][0].source_url}`;
        img_skrot_slot.alt = `${skrot_slot.billede.post_excerpt}`;
        container_skrot_slot_fill.appendChild(container_skrot_slot);


        container_skrot_slot.appendChild(h2_skrot_slot);
        container_skrot_slot.appendChild(img_wrap_skrot);
        img_wrap_skrot.appendChild(img_skrot_slot);
        img_wrap_skrot.appendChild(tekstwrap_skrot_slot);
        tekstwrap_skrot_slot.appendChild(h2_skrot_slot);
        tekstwrap_skrot_slot.appendChild(tekst_skrot_slot);
        // document.querySelector("#img_wrap_skrot").addEventListener("click", () => visDetalje(skrot_slot));
        img_wrap_skrot.addEventListener("click", () => visDetalje(skrot_slot));
        //skrot_detalje_id = `${skrot_slot.billede.post_excerpt}`
        //let skrot_detalje_id = `${skrot_slot.id}`;
        //console.log(skrot_detalje_id);

        document.querySelector("#fill").appendChild(container_skrot_slot_fill);


    });
    extraSpaces();
    extraSpaces();
    extraSpaces();
}

function extraSpaces() {
    let container_skrot_slot_ext = document.createElement("article");
    container_skrot_slot_ext.classList.add("container_skrot_slot");
    container_skrot_slot_fill.appendChild(container_skrot_slot_ext);
}

function visDetalje(skrot_slot) {
    //detalje.classList.remove("skjul");
    detalje.querySelector("button").addEventListener("click", () => detalje.classList.add("skjul"));
    detalje.querySelector("button").addEventListener("click", sletCaro());

    function sletCaro() {
        while (document.querySelector("#the_container").hasChildNodes()) {
            document.querySelector("#the_container").removeChild(document.querySelector("#the_container").lastChild);
        }
        while (document.querySelector("#legendPicContainerId").hasChildNodes()) {
            document.querySelector("#legendPicContainerId").removeChild(document.querySelector("#legendPicContainerId").lastChild);
        }
    }

    skrot_detalje_id = `${skrot_slot.id}`;


    console.log(skrot_slot.title.rendered);

    //  detalje.querySelector(".navn").textContent = skrot_slot.title.rendered;

    //document.querySelector("#skrot_detalje_fill").appendChild(caroMain);


    hentJSON_skrot_detalje();


}

async function hentJSON_skrot_detalje() {
    //let skrot_detalje_id = `${skrot_slot.id}`;
    console.log(skrot_detalje_id); //
    url_skrot_detalje = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/skrot_slot/${skrot_detalje_id}`

    const response = await fetch(url_skrot_detalje);

    detaljeJSON = await response.json();
    console.log(detaljeJSON);

    buildSkrotDetalje();
}

function runSkrotDetalje() {
    let detaljeSec = document.createElement("div");
    detaljeSec.classList.add("skjul");
    detaljeSec.id = "detalje";

    let detaljeKnap = document.createElement("button")
    detaljeKnap.innerHTML = "X";

    let detaljeContainer = document.createElement("div");
    detaljeContainer.classList.add("detalje_container");

    document.querySelector("body").appendChild(detaljeSec);
    document.querySelector("#detalje").appendChild(detaljeKnap);
    document.querySelector("#detalje").appendChild(detaljeContainer);

    let caroMain = document.createElement("div");
    caroMain.id = "caroMainId";

    let carousel = document.createElement("div");
    carousel.classList.add("carousel");
    let carouselInner = document.createElement("div");
    carouselInner.classList.add("carousel_inner");
    let caroContainer = document.createElement("div");
    caroContainer.id = "the_container";

    let pilBwdDetalje = document.createElement("img");
    pilBwdDetalje.src = "assets/img/arrow.svg";
    pilBwdDetalje.classList.add("bwdDetalje");
    let pilFwdDetalje = document.createElement("img");
    pilFwdDetalje.src = "assets/img/arrow.svg";
    pilFwdDetalje.classList.add("fwdDetalje");
    let legendPicContainer = document.createElement("div");
    legendPicContainer.id = "legendPicContainerId";

    legendPicContainer.classList.add("legend_pic_container");

    caroMain.appendChild(carousel);
    carousel.appendChild(carouselInner);
    carouselInner.appendChild(pilBwdDetalje);
    carouselInner.appendChild(caroContainer);
    carouselInner.appendChild(pilFwdDetalje);
    carousel.appendChild(legendPicContainer);

    document.querySelector(".detalje_container").appendChild(caroMain);
}

function buildSkrotDetalje() {
    //console.log("build skeleton");



    console.log("buildskrotdetalje");
    console.log(detaljeJSON);

    numberOfPicsInDetalje = detaljeJSON.billede.length;
    detaljeJSON.billede.forEach((billede, index) => {
        let caroSection = document.createElement("section");
        caroSection.id = "caroSectionId";
        let caroImg = document.createElement("img");
        caroImg.id = "caroImgId";

        let caroSection2 = document.createElement("section");
        caroSection2.id = "caroSection2Id";
        let caroImg2 = document.createElement("img");
        caroImg2.id = "caroImg2Id";


        caroImg.classList.add("caro_imgs");
        caroImg.src = billede.guid;
        caroSection.appendChild(caroImg);
        caroSection.dataset.myIndex = index;
        document.querySelector("#the_container").appendChild(caroSection);

        caroImg2.classList.add("caro_imgs");
        caroImg2.src = billede.guid;
        document.querySelector("#legendPicContainerId").appendChild(caroSection2);
        caroSection2.appendChild(caroImg2);
        caroSection2.dataset.myIndex = index;
        document.querySelector(".detalje_container").appendChild(document.querySelector("#caroMainId"));

        document.querySelector(".detalje_container").appendChild(document.querySelector("#caroMainId"));

        document.querySelector("#detalje").classList.remove("skjul");

        console.log("efter");

    })

    console.log(tjekUnderCaro);

    document.querySelector(".legend_pic_container section").classList.add("legend_border");
    document.querySelector("#the_container").addEventListener("scroll", scrollFunctionDetalje);

    document.querySelectorAll(".legend_pic_container section").forEach((sec) => {
        sec.addEventListener("click", () => {
            detaljeCurrentNum = sec.dataset.myIndex;
            autoplay_detalje = false;
            navigateDetalje();
        })
    })
    setBtnsDetalje();

    document.querySelector(".fwdDetalje").addEventListener("click", () => {
        fwdDetalje();
        autoplay_detalje = false;
    });
    document.querySelector(".bwdDetalje").addEventListener("click", () => {
        bwdDetalje();
        autoplay_detalje = false;
    });
    autoplayCarouselForwardDetalje();
}

function scrollFunctionDetalje() {
    document.querySelectorAll(".legend_pic_container section").forEach(each => {
        each.classList.remove("legend_border");
    })

    detaljeCurrentNum = Math.round(document.querySelector("#the_container").scrollLeft / document.querySelector(".caro_imgs").width);

    document.querySelector(`.legend_pic_container section:nth-child(${detaljeCurrentNum+1})`).classList.add("legend_border");

    setBtnsDetalje();
}


function fwdDetalje() {
    if (detaljeCurrentNum < numberOfPicsInDetalje - 1) {
        detaljeCurrentNum++;
        navigateDetalje();
    }
}

function bwdDetalje() {
    if (detaljeCurrentNum > 0) {

        detaljeCurrentNum--;
        navigateDetalje();
    }
}

function navigateDetalje() {
    document.querySelector("#the_container").scrollTo({
        left: detaljeCurrentNum * document.querySelector(".caro_imgs").width,
        behavior: "smooth"
    })
}

function setBtnsDetalje() {
    detectswipe("the_container", swiped_carDetalje);


    if (detaljeCurrentNum < numberOfPicsInDetalje - 1) {
        document.querySelector(".fwdDetalje").classList.remove("grayscale_f");
    } else {
        document.querySelector(".fwdDetalje").classList.add("grayscale_f");
    }
    if (detaljeCurrentNum > 0) {
        document.querySelector(".bwdDetalje").classList.remove("grayscale_b");
    } else {
        document.querySelector(".bwdDetalje").classList.add("grayscale_b");
    }
}

function swiped_carDetalje(el, d) {

    autoplay_detalje = false;
    if (d == "l") {
        fwdDetalje();
    } else if (d == "r") {
        bwdDetalje();
    }
}


let autoplay_detalje = true;

function autoplayCarouselForwardDetalje() {
    setTimeout(function () {
        if (autoplay_detalje == true) {
            if (detaljeCurrentNum < numberOfPicsInDetalje - 1) {
                fwd();
                autoplayCarouselForwardDetalje();
            } else {
                autoplayCarouselBackwardDetalje();
            }
            if (detaljeCurrentNum < numberOfPicsInDetalje - 1) {
                document.querySelector(".fwdDetalje").classList.remove("grayscale_f");
            } else {
                document.querySelector(".fwdDetalje").classList.add("grayscale_f");
            }
            if (detaljeCurrentNum > 0) {
                document.querySelector(".bwdDetalje").classList.remove("grayscale_b");
            } else {
                document.querySelector(".bwdDetalje").classList.add("grayscale_b");
            }
        }
    }, 4000)
}

function autoplayCarouselBackwardDetalje() {
    setTimeout(function () {
        if (autoplay_detalje == true) {
            if (detaljeCurrentNum > 0) {
                bwdDetalje();
                autoplayCarouselBackwardDetalje();
            } else {
                autoplayCarouselForwardDetalje();
            }
            if (detaljeCurrentNum < numberOfPicsInDetalje - 1) {
                document.querySelector(".fwdDetalje").classList.remove("grayscale_f");
            } else {
                document.querySelector(".fwdDetalje").classList.add("grayscale_f");
            }
            if (detaljeCurrentNum > 0) {
                document.querySelector(".bwdDetalje").classList.remove("grayscale_b");
            } else {
                document.querySelector(".bwdDetalje").classList.add("grayscale_b");
            }
        }
    }, 4000)
}
