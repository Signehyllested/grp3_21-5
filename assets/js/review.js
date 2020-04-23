let perPage = 30;
let URLend_review = `review?per_page=${perPage}`;
let endpoint_review = `http://signehyllested.dk/kea/2_semester/grp3_21-5/wordpress/wp-json/wp/v2/${URLend_review}`;
let retter_review = [];

document.addEventListener("DOMContentLoaded", start_review);

function start_review() {
  hentJSON_review();
}

async function hentJSON_review() {
  const response_review = await fetch(endpoint_review);
  retter_review = await response_review.json();
  visRetter_review();
}

function visRetter_review() {
  shuffle(retter_review);
  retter_review.forEach(review => {
    if (numberOfReviews <= 10) {
      let review_wrap = document.createElement("div");
      review_wrap.classList.add("review_wrap");
      review_wrap.style.transform = `translateX(${shifted}%)`;
      shifted += 100;
      let review_image = document.createElement("img");
      review_image.classList.add("review_img");
      review_image.src = review.review_img.guid;
      let review_txt = document.createElement("p");
      review_txt.textContent = review.review_text;
      let review_peop = document.createElement("h4");
      review_peop.textContent = review.review_people;
      review_wrap.appendChild(review_image);
      review_wrap.appendChild(review_txt);
      review_wrap.appendChild(review_peop);
      review_move.insertBefore(review_wrap, review_move.childNodes[0]);
      numberOfReviews++;
    }
  });
  autoplayReviewForward();
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}



let numberOfReviews = 0;
let shifted = 0;
let moved = 0;
let autoplay = true;

function autoplayReviewForward() {
  setTimeout(function () {
    if (autoplay == true) {
      if (moved != numberOfReviews * -100 + 100) {
        moved = moved - 100;
        review_move.style.transform = `translateX(${moved}%)`
        autoplayReviewForward();
      } else {
        autoplayReviewBackward();
      }
      if (moved == 0) {
        arrow_b.classList.add("grayscale_b");
      }
      if (moved != numberOfReviews * -100 + 100) {
        arrow_f.classList.remove("grayscale_f");
      }
      if (moved != 0) {
        arrow_b.classList.remove("grayscale_b");
      }
      if (moved == numberOfReviews * -100 + 100) {
        arrow_f.classList.add("grayscale_f");
      }
    }
  }, 10000)
}

function autoplayReviewBackward() {
  setTimeout(function () {
    if (autoplay == true) {
      if (moved != 0) {
        moved = moved + 100;
        review_move.style.transform = `translateX(${moved}%)`
        autoplayReviewBackward();
      } else {
        autoplayReviewForward();
      }
      if (moved == 0) {
        arrow_b.classList.add("grayscale_b");
      }
      if (moved != numberOfReviews * -100 + 100) {
        arrow_f.classList.remove("grayscale_f");
      }
      if (moved != 0) {
        arrow_b.classList.remove("grayscale_b");
      }
      if (moved == numberOfReviews * -100 + 100) {
        arrow_f.classList.add("grayscale_f");
      }
    }
  }, 10000)
}

let main_review = document.querySelector("main");
let review_overflow = document.createElement("div");
review_overflow.id = "review_overflow";
main.appendChild(review_overflow);
let review_move = document.createElement("div");
review_move.id = "review_move";
review_overflow.appendChild(review_move);

let arrow_b = document.createElement("img");
arrow_b.classList.add("arrow", "arrow_b");
arrow_b.src = "assets/img/arrow.svg";
arrow_b.addEventListener("click", reviewBack);
let arrow_f = document.createElement("img");
arrow_f.classList.add("arrow", "arrow_f");
arrow_f.src = "assets/img/arrow.svg";
arrow_f.addEventListener("click", reviewForward);

if (window.innerWidth > 800) {
  review_overflow.appendChild(arrow_b);
  review_overflow.appendChild(arrow_f);
} else {
  detectswipe("review_overflow", swiped);
}

function reviewBack() {
  console.log("back");
  autoplay = false;
  if (moved != 0) {
    moved = moved + 100;
    review_move.style.transform = `translateX(${moved}%)`
  } else {
    review_move.style.transform = `translateX(100px)`;
    setTimeout(function () {
      review_move.style.transform = `translateX(0)`;
    }, 100)
  }

  if (window.innerWidth > 800) {
    if (moved == 0) {
      arrow_b.classList.add("grayscale_b");
    }
    if (moved != numberOfReviews * -100 + 100) {
      arrow_f.classList.remove("grayscale_f");
    }
  }
}

function reviewForward() {
  console.log("forward");
  autoplay = false;
  if (moved != numberOfReviews * -100 + 100) {
    moved = moved - 100;
    review_move.style.transform = `translateX(${moved}%)`
  } else {
    review_move.style.transform = `translateX(${numberOfReviews * -100}%)`;
    setTimeout(function () {
      review_move.style.transform = `translateX(${numberOfReviews * -100 + 100}%)`;
    }, 100)
  }

  if (window.innerWidth > 800) {
    if (moved != 0) {
      arrow_b.classList.remove("grayscale_b");
    }
    if (moved == numberOfReviews * -100 + 100) {
      arrow_f.classList.add("grayscale_f");
    }
  }
}





function detectswipe(el, func) {
  swipe_det = new Object();
  swipe_det.sX = 0;
  swipe_det.sY = 0;
  swipe_det.eX = 0;
  swipe_det.eY = 0;
  var min_x = 30; //min x swipe for horizontal swipe
  var max_x = 30; //max x difference for vertical swipe
  var min_y = 50; //min y swipe for vertical swipe
  var max_y = 60; //max y difference for horizontal swipe
  var direc = "";
  ele = document.getElementById(el);
  ele.addEventListener('touchstart', function (e) {
    var t = e.touches[0];
    swipe_det.sX = t.screenX;
    swipe_det.sY = t.screenY;
  }, false);
  ele.addEventListener('touchmove', function (e) {
    var t = e.touches[0];
    swipe_det.eX = t.screenX;
    swipe_det.eY = t.screenY;
  }, false);
  ele.addEventListener('touchend', function (e) {
    //horizontal detection
    if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y) && (swipe_det.eX > 0)))) {
      if (swipe_det.eX > swipe_det.sX) direc = "r";
      else direc = "l";
    }
    //vertical detection
    else if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x) && (swipe_det.eY > 0)))) {
      if (swipe_det.eY > swipe_det.sY) direc = "d";
      else direc = "u";
    }

    if (direc != "") {
      if (typeof func == 'function') func(el, direc);
    }
    direc = "";
    swipe_det.sX = 0;
    swipe_det.sY = 0;
    swipe_det.eX = 0;
    swipe_det.eY = 0;
  }, false);
}

function swiped(el, d) {
  console.log("you swiped on element with id '" + el + "' to " + d + " direction");

  if (d == "l") {
    reviewForward();
  } else if (d == "r") {
    reviewBack();
  }
}
