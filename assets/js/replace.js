let URLend_boligerne = "posts?categories=4";
let endpoint_boligerne = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_boligerne}`;
let retter_boligerne = [];

async function hentJSON_boligerne() {
  console.log("hent json");

  const response_boligerne = await fetch(endpoint_boligerne);
  retter_boligerne = await response_boligerne.json();
  visRetter_boligerne();
}

function visRetter_boligerne() {
  console.log(retter_boligerne);

  retter_boligerne.forEach(boligpkt => {
    let om_ua = document.createElement("a");
    om_ua.href = `${boligpkt.title.rendered}.html`
    let om_up = document.createElement("p");
    let om_up_i = document.createTextNode(boligpkt.title.rendered);
    om_21_5_wrap.appendChild(om_ua);
    om_ua.appendChild(om_up);
    om_up.appendChild(om_up_i);
    let back_om = document.createElement("p");
    back_om.classList.add("back");
    om_21_5_wrap.appendChild(back_om);
  });
}
