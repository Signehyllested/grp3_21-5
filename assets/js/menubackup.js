
let header = document.createElement("header");
let nav = document.createElement("nav");
header.appendChild(nav);

let main = document.querySelector("main")
main.insertBefore(header, main.childNodes[0])

let logoContainer = document.createElement("div");
logoContainer.id = "logo_container";
nav.appendChild(logoContainer);

let logo = document.createElement("img");
logo.src = "assets/img/21-5_logo.svg";
logo.alt = "21-5 logo";
logo.id = "logo";
let burger = document.createElement("img");
burger.src = "assets/img/burger2.svg";
burger.alt = "burger menu";
burger.id = "burger";
logoContainer.appendChild(logo);
logoContainer.appendChild(burger);

let nav_wrap = document.createElement("div");
nav.appendChild(nav_wrap);

let article1 = document.createElement("article");
let a1 = document.createElement("a");
a1.href = ""
let h3_1 = document.createElement("h3");
let page1 = document.createTextNode("Forside");
nav_wrap.appendChild(article1);
article1.appendChild(a1);
a1.appendChild(h3_1);
h3_1.appendChild(page1);

let article2 = document.createElement("article");
let a2 = document.createElement("a");
a2.href = ""
let h3_2 = document.createElement("h3");
let page2 = document.createTextNode("Køb din andel");
nav_wrap.appendChild(article2);
article2.appendChild(a2);
a2.appendChild(h3_2);
h3_2.appendChild(page2);

let article3 = document.createElement("article");
let h3_3 = document.createElement("h3");
h3_3.id = "om_click"
let page3 = document.createTextNode("Om 21-5");
nav_wrap.appendChild(article3);
article3.appendChild(h3_3);
h3_3.appendChild(page3);

let article4 = document.createElement("article");
let h3_4 = document.createElement("h3");
h3_4.id = "dest_click"
let page4 = document.createTextNode("Destinationerne");
nav_wrap.appendChild(article4);
article4.appendChild(h3_4);
h3_4.appendChild(page4);

let article5 = document.createElement("article");
let h3_5 = document.createElement("h3");
h3_5.id = "bolig_click"
let page5 = document.createTextNode("Boligerne");
nav_wrap.appendChild(article5);
article5.appendChild(h3_5);
h3_5.appendChild(page5);

let top_wrap = document.createElement("div");
nav.appendChild(top_wrap);
let lande = document.createElement("p");
top_wrap.appendChild(lande);
lande.innerHTML = "Danmark <br>Norge <br>Sverige <br>USA <br>Canada";
let login = document.createElement("p");
login.id = "login";
let login_i = document.createTextNode("Login");
top_wrap.appendChild(login);
login.appendChild(login_i);

let om_21_5 = document.createElement("div");
om_21_5.id = "om_21-5";
om_21_5.classList.add("underkategori");
nav.appendChild(om_21_5);
let om_21_5_wrap = document.createElement("div");
om_21_5.appendChild(om_21_5_wrap);

let destinationerne = document.createElement("div");
destinationerne.classList.add("underkategori");
destinationerne.id = "destinationerne";
nav.appendChild(destinationerne);
let destinationerne_wrap = document.createElement("div");
destinationerne.appendChild(destinationerne_wrap);
let dest_ua_1 = document.createElement("a");
dest_ua_1.href = ""
let dest_up_1 = document.createElement("p");
let dest_up_1_i = document.createTextNode("Mallorca");
destinationerne_wrap.appendChild(dest_ua_1);
dest_ua_1.appendChild(dest_up_1);
dest_up_1.appendChild(dest_up_1_i);
let dest_ua_2 = document.createElement("a");
dest_ua_2.href = ""
let dest_up_2 = document.createElement("p");
let dest_up_2_i = document.createTextNode("Sydspanien");
destinationerne_wrap.appendChild(dest_ua_2);
dest_ua_2.appendChild(dest_up_2);
dest_up_2.appendChild(dest_up_2_i);
let dest_ua_3 = document.createElement("a");
dest_ua_3.href = ""
let dest_up_3 = document.createElement("p");
let dest_up_3_i = document.createTextNode("Toscana");
destinationerne_wrap.appendChild(dest_ua_3);
dest_ua_3.appendChild(dest_up_3);
dest_up_3.appendChild(dest_up_3_i);
let dest_ua_4 = document.createElement("a");
dest_ua_4.href = ""
let dest_up_4 = document.createElement("p");
let dest_up_4_i = document.createTextNode("Sydfrankrig");
destinationerne_wrap.appendChild(dest_ua_4);
dest_ua_4.appendChild(dest_up_4);
dest_up_4.appendChild(dest_up_4_i);
let dest_ua_5 = document.createElement("a");
dest_ua_5.href = ""
let dest_up_5 = document.createElement("p");
let dest_up_5_i = document.createTextNode("Charmonix");
destinationerne_wrap.appendChild(dest_ua_5);
dest_ua_5.appendChild(dest_up_5);
dest_up_5.appendChild(dest_up_5_i);
let dest_ua_6 = document.createElement("a");
dest_ua_6.href = ""
let dest_up_6 = document.createElement("p");
let dest_up_6_i = document.createTextNode("New York");
destinationerne_wrap.appendChild(dest_ua_6);
dest_ua_6.appendChild(dest_up_6);
dest_up_6.appendChild(dest_up_6_i);
let dest_ua_7 = document.createElement("a");
dest_ua_7.href = ""
let dest_up_7 = document.createElement("p");
let dest_up_7_i = document.createTextNode("Barcelona");
destinationerne_wrap.appendChild(dest_ua_7);
dest_ua_7.appendChild(dest_up_7);
dest_up_7.appendChild(dest_up_7_i);
let dest_ua_8 = document.createElement("a");
dest_ua_8.href = ""
let dest_up_8 = document.createElement("p");
let dest_up_8_i = document.createTextNode("Paris");
destinationerne_wrap.appendChild(dest_ua_8);
dest_ua_8.appendChild(dest_up_8);
dest_up_8.appendChild(dest_up_8_i);
let dest_ua_9 = document.createElement("a");
dest_ua_9.href = ""
let dest_up_9 = document.createElement("p");
let dest_up_9_i = document.createTextNode("Rom");
destinationerne_wrap.appendChild(dest_ua_9);
dest_ua_9.appendChild(dest_up_9);
dest_up_9.appendChild(dest_up_9_i);
let dest_ua_10 = document.createElement("a");
dest_ua_10.href = ""
let dest_up_10 = document.createElement("p");
let dest_up_10_i = document.createTextNode("Om destinationerne");
destinationerne_wrap.appendChild(dest_ua_10);
dest_ua_10.appendChild(dest_up_10);
dest_up_10.appendChild(dest_up_10_i);
let back_dest = document.createElement("p");
back_dest.classList.add("back");
om_21_5_wrap.appendChild(back_dest);

let boligerne = document.createElement("div");
boligerne.id = "boligerne";
boligerne.classList.add("underkategori");
nav.appendChild(boligerne);
let boligerne_wrap = document.createElement("div");
boligerne.appendChild(boligerne_wrap);
let bolig_ua_1 = document.createElement("a");
bolig_ua_1.href = ""
let bolig_up_1 = document.createElement("p");
let bolig_up_1_i = document.createTextNode("Om boligerne");
boligerne_wrap.appendChild(bolig_ua_1);
bolig_ua_1.appendChild(bolig_up_1);
bolig_up_1.appendChild(bolig_up_1_i);
let bolig_ua_2 = document.createElement("a");
bolig_ua_2.href = ""
let bolig_up_2 = document.createElement("p");
let bolig_up_2_i = document.createTextNode("Istandsættelse");
boligerne_wrap.appendChild(bolig_ua_2);
bolig_ua_2.appendChild(bolig_up_2);
bolig_up_2.appendChild(bolig_up_2_i);
let bolig_ua_3 = document.createElement("a");
bolig_ua_3.href = ""
let bolig_up_3 = document.createElement("p");
let bolig_up_3_i = document.createTextNode("Udvælgelse");
boligerne_wrap.appendChild(bolig_ua_3);
bolig_ua_3.appendChild(bolig_up_3);
bolig_up_3.appendChild(bolig_up_3_i);
let back_bolig = document.createElement("p");
back_bolig.classList.add("back");
om_21_5_wrap.appendChild(back_bolig);
