const barIcon = document.getElementById("bar-icon"),
  links = document.getElementById("links"),
  close = document.querySelector("#close > img");

links.addEventListener("click", (e) => e.stopPropagation());

barIcon.addEventListener("click", function (e) {
  e.stopPropagation();
  links.classList.toggle("open-nav");
});

document.addEventListener("click", (e) => {
  if (e.target !== links) {
    links.classList.remove("open-nav");
  }
});

close.addEventListener("click", () => {
  links.classList.remove("open-nav");
});

// ################################################
const sliderBox = [...document.querySelectorAll("#slider-container > div")],
  bultes = [...document.querySelectorAll("#bultes > span")];

let slideCount = sliderBox.length;

let currentSlide = 1;

check(bultes, sliderBox);

for (let i = 0; i < slideCount; i++) {
  sliderBox[i].setAttribute("data-index", i + 1);
}

for (let i = 0; i < slideCount; i++) {
  bultes[i].addEventListener("click", function () {
    currentSlide = +sliderBox[i].getAttribute("data-index");
    check(bultes, sliderBox);
  });
}

function check(bultes, sliderCard) {
  removeAllActive();
  bultes[currentSlide - 1].classList.add("active");
  sliderCard[currentSlide - 1].classList.add("active");
}

function removeAllActive() {
  bultes.forEach((el) => el.classList.remove("active"));
  sliderBox.forEach((el) => el.classList.remove("active"));
}

