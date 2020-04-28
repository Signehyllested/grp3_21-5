let URLend_personer = `personer?per_page=100`;
let endpoint_personer = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_personer}`;
let retter_personer = [];
let container_personer = document.createElement("div");
container_personer.id = "container_personer";

function start_personer() {
    hentJSON_personer();
    runPersDetalje();
}

async function hentJSON_personer() {
    const response_personer = await fetch(endpoint_personer);
    retter_personer = await response_personer.json();
    visRetter_personer();
    console.log(retter_personer);
}

function visRetter_personer() {
    console.log("visretter personer");
    retter_personer.forEach(person => {
        let container_person = document.createElement("article");
        container_person.classList.add("container_person");
        let img_personer = document.createElement("img");
        img_personer.src = `${person.billede.guid}`;
        img_personer.alt = `${person.title.rendered}`;
        let h2_personer = document.createElement("h2");
        h2_personer.textContent = `${person.title.rendered}`;
        //let tekst_personer = document.createElement("div");
        //tekst_personer.innerHTML = `${person.content.rendered}`;

        let kontakt_personer = document.createElement("p");
        kontakt_personer.textContent = person.kontakt;

        container_person.appendChild(img_personer);

        container_person.appendChild(h2_personer);
        //container_person.appendChild(tekst_personer);
        container_person.appendChild(kontakt_personer);
        container_personer.appendChild(container_person);
        document.querySelector("#fill").appendChild(container_personer);

        container_person.addEventListener("click", () => visPersDetalje(person));

    });
    extraSpaces();
    extraSpaces();
    extraSpaces();
}

function extraSpaces() {
    let container_person_ext = document.createElement("article");
    container_person_ext.classList.add("container_person");
    container_personer.appendChild(container_person_ext);
}

function runPersDetalje() {
    let detaljeSec = document.createElement("div");
    detaljeSec.classList.add("skjul");
    detaljeSec.id = "pers_detalje";

    let detaljeKnap = document.createElement("button")
    detaljeKnap.innerHTML = "X";

    let detaljeContainer = document.createElement("div");
    detaljeContainer.classList.add("pers_detalje_container");

    document.querySelector("body").appendChild(detaljeSec);
    document.querySelector("#pers_detalje").appendChild(detaljeKnap);
    document.querySelector("#pers_detalje").appendChild(detaljeContainer);
}

function visPersDetalje(person) {
    console.log("visdetalje pers");
    pers_detalje.classList.remove("skjul");
    pers_detalje.querySelector("button").addEventListener("click", () => pers_detalje.classList.add("skjul"));

    pers_detalje_id = `${person.id}`;
    console.log(pers_detalje_id);

    hentJSON_pers_detalje(person);
}

async function hentJSON_pers_detalje(person) {
    //let skrot_detalje_id = `${skrot_slot.id}`;
    console.log(pers_detalje_id); //
    url_pers_detalje = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/personer/${pers_detalje_id}`

    const response = await fetch(url_pers_detalje);

    detaljeJSON = await response.json();
    console.log(detaljeJSON);

    buildPersDetalje(person);
}

function buildPersDetalje(person) {
    let persDetaljeH2 = document.createElement("h2");
    persDetaljeH2.textContent = `${person.title.rendered}`;

    let persMain = document.createElement("div");
    persMain.classList.add("pers");

    let persDetaljeCol = document.createElement("div");
    persDetaljeCol.classList.add("pers_detalje_col");
    let persDetaljeTekst = document.createElement("p");
    persDetaljeTekst.innerHTML = `${person.content.rendered}`;
    let persDetaljeCol2 = document.createElement("div");
    persDetaljeCol2.classList.add("pers_detalje_img");
    let persDetaljeImg = document.createElement("img");
    persDetaljeImg.src = `${person.billede.guid}`;

    document.querySelector(".pers_detalje_container").appendChild(persDetaljeCol);
    document.querySelector(".pers_detalje_container").appendChild(persDetaljeCol2);

    document.querySelector(".pers_detalje_col").appendChild(persDetaljeH2);
    document.querySelector(".pers_detalje_col").appendChild(persDetaljeTekst);
    document.querySelector(".pers_detalje_img").appendChild(persDetaljeImg);





}
