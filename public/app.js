const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const carousel = document.querySelector(".carousel");
const prodList = document.querySelector(".carousel .prodShowcaseList");

nextButton.onclick = function () {
  showSlider("next");
};
prevButton.onclick = function () {
  showSlider("prev");
};

const showSlider = (type) => {
  let products = document.querySelectorAll(
    ".carousel .prodShowcaseList .product"
  );

  if (type === "next") {
    prodList.appendChild(products[0]);
    carousel.classList.add("next");
  } else if (type === "prev") {
  }
};
