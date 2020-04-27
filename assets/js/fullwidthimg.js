window.addEventListener("resize", fullWidth);

function fullWidth() {
  document.querySelectorAll(".full_width").forEach((img) => {
    if (window.innerWidth > 1200) {
      let margin = (window.innerWidth - 1200) / 2 + 50;
      img.style.transform = `translateX(-${margin}px)`;
    } else if (window.innerWidth > 800) {
      let margin = 50;
      img.style.transform = `translateX(-${margin}px)`;
    } else {
      let margin = 20;
      img.style.transform = `translateX(-${margin}px)`;
    }
  })
}
