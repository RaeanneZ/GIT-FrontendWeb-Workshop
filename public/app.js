const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");
const carousel = document.querySelector(".carousel");
const prodList = document.querySelector(".carousel .prodShowcaseList");

console.log(prevButton, nextButton);
nextButton.onclick = function () {
  showSlider("next");
};
prevButton.onclick = function () {
  showSlider("prev");
};

let unAcceptClick;

const showSlider = (type) => {
  nextButton.style.pointerEvents = "none";
  prevButton.style.pointerEvents = "none";

  carousel.classList.remove("prev", "next"); // Delete all classnames from carousel to avoid clashes
  let products = document.querySelectorAll(
    ".carousel .prodShowcaseList .product"
  );

  console.log(products);

  if (type === "next") {
    prodList.appendChild(products[0]);
    carousel.classList.add("next"); // This is to signal animation
  } else {
    let lastPos = products.length - 1;
    prodList.prepend(products[lastPos]);
    carousel.classList.add("prev"); // This is to signal animation
  }

  // Ensure that the timer starts from 0
  clearTimeout(unAcceptClick);
  // Ensure user doesn't spam the left and right arrows quickly
  unAcceptClick = setTimeout(() => {
    nextButton.style.pointerEvents = "auto";
    prevButton.style.pointerEvents = "auto";
  }, 1000);
};
