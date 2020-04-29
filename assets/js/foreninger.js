let perPage3 = 50;
let URLend_foreninger = `foreninger?per_page=${perPage3}`;
let endpoint_foreninger = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_foreninger}`;
let retter_foreninger = [];
let container_foreninger = document.createElement("div");
container_foreninger.id = "container_foreninger";

function start_foreninger() {
    hentJSON_foreninger();
}

async function hentJSON_foreninger() {
    const response_foreninger = await fetch(endpoint_foreninger);
    retter_foreninger = await response_foreninger.json();
    visIndhold_foreninger();
}

function visIndhold_foreninger() {
    console.log("visIndhold foreninger");
    retter_foreninger.forEach(forening => {
        let container_forening = document.createElement("article");
        container_forening.classList.add("container_forening");
        let h2_foreninger = document.createElement("h2");
        h2_foreninger.textContent = `${forening.title.rendered}`;

        let img_wrap = document.createElement("div");
        img_wrap.classList.add("img_wrap");

        let tekst_foreninger = document.createElement("div");
        tekst_foreninger.innerHTML = `${forening.content.rendered}`;
        tekst_foreninger.classList.add("img_text")
        let img_foreninger = document.createElement("img");

        img_foreninger.src = `${forening.billede.guid}`;
        img_foreninger.alt = `${forening.title.rendered}`;

        container_forening.appendChild(h2_foreninger);
        container_forening.appendChild(img_wrap);
        img_wrap.appendChild(img_foreninger);
        img_wrap.appendChild(tekst_foreninger);
        container_foreninger.appendChild(container_forening);
        container_forening.appendChild(h2_foreninger);

        document.querySelector("#fill").appendChild(container_foreninger);
    });
    extraSpaces();
    extraSpaces();
    extraSpaces();
}

function extraSpaces() {
    let container_forening_ext = document.createElement("article");
    container_forening_ext.classList.add("container_forening");
    container_foreninger.appendChild(container_forening_ext);
}
