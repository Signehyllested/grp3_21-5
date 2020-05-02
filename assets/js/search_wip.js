function startSearch() {
  console.log("start search");
  let searchValue = search_input.value;

  search_icon.addEventListener("click", showSearch);
  search_icon.addEventListener("click", hideSearchIcon);
  //searchInput.setAttribute("onkeyup", "hentJSON_search()");
}



function showSearch() {
  search_icon.removeEventListener("click", showSearch);
  search_input.setAttribute("onkeyup", "hentJSON_search()");
}


let json_search = [];
let search_link;

async function hentJSON_search() {
  searchValue = search_input.value;

  let URLend_search = `search?type=post&subtype=post&search=${searchValue}`;
  let endpoint_search = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_search}`;


  const response_search = await fetch(endpoint_search);
  json_search = await response_search.json();

  if (searchValue) {
    visIndhold_search();
  } else {
    search_results_wrap.innerHTML = "";
  }
}


function visIndhold_search() {
  search_results_wrap.innerHTML = "";

  //console.log(json_search);

  json_search.forEach(post => {
    let h3 = document.createElement("h3");
    h3.classList.add("search_title");
    h3.dataset.restAPI = `${post.title}`;
    search_results_wrap.appendChild(h3);


    search_link = `${post["_links"].self[0].href}`;
    hentJSON_search_link();
  });
}





let json_search_link = [];

async function hentJSON_search_link() {
  let endpoint_search_link = `${search_link}`;
  const response_search_link = await fetch(endpoint_search_link);
  json_search_link = await response_search_link.json();
  visIndhold_search_link();
}

function visIndhold_search_link() {
  document.querySelectorAll(".search_title").forEach((title) => {
    //console.log(title.dataset.restAPI);
    //console.log(json_search_link.title.rendered);

    if (title.dataset.restAPI == json_search_link.title.rendered) {
      title.textContent = `${json_search_link.title.rendered}`;
      let p = document.createElement("p");
      let pContent = json_search_link.content.rendered;
      let pSplit1 = pContent.split("<p>")[1];
      let pSplit2 = pSplit1.split("</p>")[0];
      let pSplit3;
      if (pSplit2.length > 50) {
        pSplit3 = pSplit2.split(".")[0];
      } else {
        let pSplit3array = pSplit2.split(".").slice(0, 2);
        pSplit3 = pSplit3array[0] + " " + pSplit3array[1];
      }

      p.innerHTML = `<p>${pSplit3}...</p>`;
      title.insertAdjacentHTML("beforeend", p.innerHTML);
    }
  })

  let link = json_search_link.slug;
  //location.href = `21-5.html?slug=${link}`;
}









let search_icon_wrap = document.createElement("div");
search_icon_wrap.id = "search_icon_wrap";
search_wrap.appendChild(search_icon_wrap);
let search_input = document.createElement("input");
search_input.setAttribute("type", "text");
search_input.setAttribute("placeholder", "Søg på siden");
search_input.id = "search_input";
search_icon_wrap.appendChild(search_input);
let search_icon = document.createElement("img");
search_icon.src = "assets/img/search.svg";
search_icon.alt = "search icon";
search_icon.id = "search";
search_icon_wrap.appendChild(search_icon);

let search_results_wrap = document.createElement("div");
search_results_wrap.id = "search_results_wrap";
search_wrap.appendChild(search_results_wrap);





function hideSearchIcon() {
  search_icon.removeEventListener("click", hideSearchIcon);
  search_icon.addEventListener("click", showSearchIcon);

  search_icon.classList.remove("search_icon_ani_out");
  search_icon.classList.add("search_icon_ani_in");
  if (window.innerWidth > 800) {
    search_input.classList.remove("search_input_ani_out_dt");
    search_input.classList.add("search_input_ani_in_dt");
  } else {
    search_input.classList.remove("search_input_ani_out_mb");
    search_input.classList.add("search_input_ani_in_mb");
  }
  search_results_wrap.classList.remove("search_result_ani_dt");
  search_results_wrap.classList.remove("search_result_ani_mb");

  setTimeout(function () {
    search_icon.src = "assets/img/cross.svg";
  }, 300)
}

function showSearchIcon() {
  search_input.value = "";
  search_icon.removeEventListener("click", showSearchIcon);
  search_icon.addEventListener("click", hideSearchIcon);

  search_icon.classList.remove("search_icon_ani_in");
  search_icon.classList.add("search_icon_ani_out");
  if (window.innerWidth > 800) {
    search_input.classList.remove("search_input_ani_in_dt");
    search_input.classList.add("search_input_ani_out_dt");
  } else {
    search_input.classList.remove("search_input_ani_in_mb");
    search_input.classList.add("search_input_ani_out_mb");
  }

  setTimeout(function () {
    search_icon.src = "assets/img/search.svg";
  }, 300)

  search_results_wrap.classList.remove("search_result_ani_dt");
  search_results_wrap.classList.remove("search_result_ani_mb");
  if (window.innerWidth > 440) {
    search_results_wrap.classList.add("search_result_ani_dt");
  } else {
    search_results_wrap.classList.add("search_result_ani_mb");
  }
  setTimeout(function () {
    search_results_wrap.innerHTML = "";
  }, 600)
}
