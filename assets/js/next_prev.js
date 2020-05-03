let URLend_naeste = `posts?per_page=100`;
let endpoint_naeste = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_naeste}`;
let json_naeste = [];
let arrayObj = 0;

hentJSON_naeste();

async function hentJSON_naeste() {
  const response_naeste = await fetch(endpoint_naeste);
  json_naeste = await response_naeste.json();
  visIndhold_naeste();
}

function visIndhold_naeste() {
  json_naeste.forEach(post => {
    if (post.slug == slug && arrayObj != 0) {
      let prev_obj = arrayObj - 1;
      let title_prev = json_naeste[prev_obj].title.rendered;
      //console.log(title_prev);

      let prev_container = document.createElement("div");
      prev_container.id = "prev_container";
      next_prev_container.appendChild(prev_container);
      let forrige = document.createElement("p");
      forrige.textContent = "";
      prev_container.appendChild(forrige);
      let prev_a = document.createElement("a");
      prev_a.id = "prev_a";
      prev_a.addEventListener("click", () => {
        document.querySelector("#pre").style.transform = "scale(2.5)";
        document.querySelector("#anim").style.transform = "scale(1)";
        document.querySelector("#spinner").style.animationPlayState = "running";
        setTimeout(function () {
          location.href = `21-5.html?slug=${json_naeste[prev_obj].slug}`;
        }, 500)
      })
      prev_a.classList.add("wp-block-button", "no_after");
      prev_container.appendChild(prev_a);
      let prev_arrow = document.createElement("img");
      prev_arrow.src = "assets/img/arrow.svg";
      prev_arrow.alt = "forrige side";
      prev_a.appendChild(prev_arrow);
      let prev_page = document.createElement("p");
      prev_page.textContent = "";
      prev_page.setAttribute("data-prev", title_prev);
      prev_a.appendChild(prev_page);

    }
    if (post.slug == slug && arrayObj < json_naeste.length - 1) {
      let next_obj = arrayObj + 1;
      let title_next = json_naeste[next_obj].title.rendered;
      //console.log(title_next);

      let next_container = document.createElement("div");
      next_container.id = "next_container";
      next_prev_container.appendChild(next_container);
      let naeste = document.createElement("p");
      naeste.textContent = "";
      next_container.appendChild(naeste);
      let next_a = document.createElement("a");
      next_a.id = "next_a";
      next_a.addEventListener("click", () => {
        document.querySelector("#pre").style.transform = "scale(2.5)";
        document.querySelector("#anim").style.transform = "scale(1)";
        document.querySelector("#spinner").style.animationPlayState = "running";
        setTimeout(function () {
          location.href = `21-5.html?slug=${json_naeste[next_obj].slug}`;
        }, 500)
      })
      next_a.classList.add("wp-block-button", "no_after");
      next_container.appendChild(next_a);
      let next_page = document.createElement("p");
      next_page.textContent = "";
      next_page.setAttribute("data-next", title_next);
      next_a.appendChild(next_page);
      let next_arrow = document.createElement("img");
      next_arrow.src = "assets/img/arrow.svg";
      next_arrow.alt = "næste side";
      next_a.appendChild(next_arrow);

    }
    arrayObj++;
  });
}

let next_prev_container = document.createElement("main");
next_prev_container.id = "next_prev_container";




document.querySelector("#main").appendChild(next_prev_container);
