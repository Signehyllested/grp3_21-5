let URLend_personer = `personer?per_page=100`;
let endpoint_personer = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_personer}`;
let retter_personer = [];
let container_personer = document.createElement("div");
container_personer.id = "container_personer";

function start_personer() {
  hentJSON_personer();
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
