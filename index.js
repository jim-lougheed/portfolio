import interestsData from "./data.js";

// Entry page animation

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const contentFade = () => {
  $(".entry__page").css("background-color", "transparent");
  $(".entry__container").css("opacity", "0");
};
const splitAnimation = () => {
  $(".entry__shape--1").css("width", "0");
  $(".entry__shape--2").css("width", "0");
};

const handleEnterClick = async () => {
  contentFade();
  await delay(1000);
  splitAnimation();
  await delay(1000);
  await $(".entry__page").css("opacity", "0");
  await delay(1000);
  await $(".entry__page").remove();
};

// Tab menu

const sections = $(".section").toArray();

const goToSection = (selectedSection) => {
  sections.forEach((section, i) => {
    $(section).css("left", `${(i - selectedSection) * 100}%`);
    $(section).removeClass("section--active");
    if (Number(selectedSection) === i) {
      $(section).addClass("section--active");
      const maxH = section.getBoundingClientRect().height;
      $(".animation-container").css("height", `${maxH}px`);
    }
  });
};

$(".sections-nav").click((e) => {
  if ($(e.target).hasClass("sections-nav__link")) {
    const { section } = e.target.dataset;
    goToSection(section);
  }
});

// Project details

const detailSections = $(".project__specs").toArray();

detailSections.forEach((section) => {
  $(section).click((e) => {
    if ($(e.target).hasClass("project__spec")) {
      changeSpec(e);
    }
  });
});

const changeSpec = (e) => {
  const { spec } = e.target.dataset;
  const { parentElement } = e.target;
  const allSpecs = Array.from(parentElement.children);
  const allDetails = Array.from(parentElement.nextElementSibling.children);
  changeClass(allSpecs, "project__spec", Number(spec));
  changeClass(allDetails, "project__detail", Number(spec));
};

const changeClass = (elements, className, spec) => {
  elements.forEach((element, i) => {
    $(element).removeClass(`${className}--active`);
    if (i === spec) {
      $(element).addClass(`${className}--active`);
    }
  });
};

// Interest details

const moreInfoInterests = $(".interest__spec").toArray();

moreInfoInterests.forEach((button) => {
  $(button).click((e) => {
    const interestsContainer =
      e.target.parentElement.parentElement.parentElement.parentElement;
    displayMore(e);
    $(".animation-container").css(
      "height",
      `${interestsContainer.getBoundingClientRect().height + 200}px`
    );
  });
});

const displayMore = (e) => {
  let spec;
  if ($(e.target).hasClass("interest__spec-arrow")) {
    spec = e.target.parentElement;
  } else {
    spec = e.target;
  }
  $(spec).toggleClass("interest__spec--active");
  $(spec).hasClass("interest__spec--active")
    ? (spec.firstElementChild.innerText = "↑")
    : (spec.firstElementChild.innerText = "↓");
  $(spec.nextElementSibling).toggleClass("interest__detail--active");
};

// Initialization

const init = () => {
  $(".entry__button").click(() => {
    handleEnterClick();
  });
  goToSection(0);
};

$(document).ready(() => {
  init();
});
