let perPage4 = 50;
let URLend_skrot_slot = `skrot_slot?per_page=${perPage4}`;
let endpoint_skrot_slot = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_skrot_slot}`;
let retter_skrot_slot = [];
let container_skrot_slot_fill = document.createElement("div");
container_skrot_slot_fill.id = "container_skrot_slot_fill";

function start_skrot_slot() {
    hentJSON_skrot_slot();
}

async function hentJSON_skrot_slot() {
    const response_skrot_slot = await fetch(endpoint_skrot_slot);
    retter_skrot_slot = await response_skrot_slot.json();
    visRetter_skrot_slot();
    console.log(retter_skrot_slot);
}

function visRetter_skrot_slot() {
    console.log(retter_skrot_slot);

    retter_skrot_slot.forEach(skrot_slot => {
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

        img_skrot_slot.src = `${skrot_slot.billede.guid}`;
        img_skrot_slot.alt = `${skrot_slot.title.rendered}`;
        container_skrot_slot_fill.appendChild(container_skrot_slot);

        container_skrot_slot.appendChild(h2_skrot_slot);
        container_skrot_slot.appendChild(img_wrap_skrot);
        img_wrap_skrot.appendChild(img_skrot_slot);
        img_wrap_skrot.appendChild(tekstwrap_skrot_slot);
        tekstwrap_skrot_slot.appendChild(h2_skrot_slot);
        tekstwrap_skrot_slot.appendChild(tekst_skrot_slot);


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
