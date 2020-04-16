if (!!document.querySelector(".col1") && !!document.querySelector(".col_wrap1")) {
  document.querySelector(".col_wrap1").classList.add("col_wrap");
  document.querySelectorAll(".col1").forEach((col) => {
    col.classList.add("col");
    document.querySelector(".col_wrap1").appendChild(col);
  })
}
if (!!document.querySelector(".col2") && !!document.querySelector(".col_wrap2")) {
  document.querySelector(".col_wrap2").classList.add("col_wrap");
  document.querySelectorAll(".col2").forEach((col) => {
    col.classList.add("col");
    document.querySelector(".col_wrap2").appendChild(col);
  })
}
if (!!document.querySelector(".col3") && !!document.querySelector(".col_wrap3")) {
  document.querySelector(".col_wrap3").classList.add("col_wrap");
  document.querySelectorAll(".col3").forEach((col) => {
    col.classList.add("col");
    document.querySelector(".col_wrap3").appendChild(col);
  })
}
if (!!document.querySelector(".col4") && !!document.querySelector(".col_wrap4")) {
  document.querySelector(".col_wrap4").classList.add("col_wrap");
  document.querySelectorAll(".col4").forEach((col) => {
    col.classList.add("col");
    document.querySelector(".col_wrap4").appendChild(col);
  })
}
