//hent alle posts med categorien køb din andel
let URLend_kob_din_andel = "posts?categories=7";
let endpoint_kob_din_andel = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_kob_din_andel}`;
let retter_kob_din_andel = [];

async function hentJSON_kob_din_andel() {
  console.log("hent json");

  const response_kob_din_andel = await fetch(endpoint_kob_din_andel);
  retter_kob_din_andel = await response_kob_din_andel.json();
  visRetter_kob_din_andel();
}

function visRetter_kob_din_andel() {
  console.log(retter_kob_din_andel);

  retter_kob_din_andel.forEach(kobpkt => {
    let om_ua = document.createElement("a");
    om_ua.addEventListener("click", () => {
      document.querySelector("#anim").style.width = "25vw";
      document.querySelector("#pre").style.width = "100vh";
      document.querySelector("#pre").style.height = "100vh";
      document.querySelector("#pre").style.transform = "scale(2.5)";

      setTimeout(function () {
        location.href = `template.html?slug=${kobpkt.slug}`
      }, 500)
    })
    let om_up = document.createElement("p");
    let om_up_i = document.createTextNode(kobpkt.title.rendered);
    kob_din_andel_wrap.appendChild(om_ua);
    om_ua.appendChild(om_up);
    om_up.appendChild(om_up_i);
  });
  let back_om = document.createElement("p");
  back_om.classList.add("back");
  kob_din_andel_wrap.appendChild(back_om);
}
