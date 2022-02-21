import interestsData from "./data.js";

const activeSection = document.querySelector(".section--active");

$(".entry__button").click(() => {
  $(".entry__page").css("background-color", "transparent");
  $(".entry__container").css("opacity", "0");
  setTimeout(() => {
    $(".entry__shape--1").css("width", "0");
    $(".entry__shape--2").css("width", "0");
  }, 1000);
  setTimeout(() => {
    $(".entry__page").css("opacity", "0");
  }, 3000);
  setTimeout(() => {
    $(".entry__page").remove();
  }, 4000);
});

// Tab menu
const sections = document.querySelectorAll(".section");
const animationContainer = document.querySelector(".animation-container");
const goToSection = (selectedSection) => {
  sections.forEach((section, i) => {
    // console.log(section.getBoundingClientRect());
    section.style.left = `${(i - selectedSection) * 100}%`;
    section.classList.remove("section--active");
    if (Number(selectedSection) === i) {
      section.classList.add("section--active");
      const maxH = section.getBoundingClientRect().height;
      console.log(`${maxH}px`, animationContainer);
      animationContainer.style.height = `${maxH}px`;
      console.log(animationContainer.style);
    }
  });
};

$(".sections-nav").click((e) => {
  if (e.target.classList.contains("sections-nav__link")) {
    const { section } = e.target.dataset;
    goToSection(section);
  }
});
goToSection(0);

// Project details
const detailSections = document.querySelectorAll(".project__specs");
console.log(detailSections);

detailSections.forEach((section) => {
  section.addEventListener("click", (e) => {
    if (e.target.classList.contains("project__spec")) {
      changeSpec(e);
    }
  });
});

const changeSpec = (e) => {
  const { spec } = e.target.dataset;
  const allSpecs = Array.from(e.target.parentElement.children);
  const allDetails = Array.from(
    e.target.parentElement.nextElementSibling.children
  );
  changeClass(allSpecs, "project__spec", Number(spec));
  changeClass(allDetails, "project__detail", Number(spec));
};

const changeClass = (elements, className, spec) => {
  elements.forEach((element, i) => {
    element.classList.remove(`${className}--active`);
    if (i === spec) {
      element.classList.add(`${className}--active`);
    }
  });
};

// Interest details
const moreInfoInterests = document.querySelectorAll(".interest__spec");
console.log(moreInfoInterests);

moreInfoInterests.forEach((button) => {
  button.addEventListener("click", (e) => {
    displayMore(e);
    animationContainer.style.height = `${
      e.target.parentElement.parentElement.parentElement.parentElement.getBoundingClientRect()
        .height + 200
    }px`;
    console.log(
      e.target.parentElement.parentElement.parentElement.parentElement.getBoundingClientRect()
        .height
    );
  });
});

const displayMore = (e) => {
  let spec;
  if (e.target.classList.contains("interest__spec-arrow")) {
    spec = e.target.parentElement;
  } else {
    spec = e.target;
  }
  $(spec).toggleClass("interest__spec--active");
  spec.classList.contains("interest__spec--active")
    ? (spec.firstElementChild.innerText = "↑")
    : (spec.firstElementChild.innerText = "↓");
  $(spec.nextElementSibling).toggleClass("interest__detail--active");
};
