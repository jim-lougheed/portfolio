import interestsData from "./data.js";

// $(".sections-container").css("height", "500px");

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

// const carouselInner = document.querySelector(".carousel-inner");

// const displayInterestsData = (data) => {
//   data.map((interest, i) => {
//     const { image, altText, title, description } = interest;

//     const carouselItem = createCarouselItem(i);
//     const interestImage = createInterestImage(image, altText);
//     const interestText = createInterestText(i);
//     const interestItem = createInterestItem(i);

//     interestText.appendChild(createInterestTitle(title));
//     interestText.appendChild(createInterestDescription(description));

//     interestItem.appendChild(interestImage);
//     interestItem.appendChild(interestText);

//     carouselItem.appendChild(interestItem);

//     carouselInner.appendChild(carouselItem);
//   });
// };

// const createCarouselItem = (i) => {
//   const carouselItem = document.createElement("div");
//   carouselItem.classList.add("carousel-item");
//   i === 0 && carouselItem.classList.add("active");
//   return carouselItem;
// };

// const createInterestItem = (i) => {
//   const interestItem = document.createElement("div");
//   interestItem.classList.add("interest__item");
//   i % 2 === 0
//     ? interestItem.classList.add("interest__item--even")
//     : interestItem.classList.add("interest__item--odd");
//   return interestItem;
// };

// const createInterestImage = (image, altText) => {
//   const interestImage = document.createElement("img");
//   interestImage.classList.add("interest__image");
//   interestImage.setAttribute("src", image);
//   interestImage.setAttribute("alt", altText);
//   return interestImage;
// };

// const createInterestText = (i) => {
//   const interestText = document.createElement("div");
//   interestText.classList.add("carousel-caption");
//   interestText.classList.add("d-md-block");
//   interestText.classList.add("interest__text");
//   i % 2 === 0
//     ? interestText.classList.add("interest__text--even")
//     : interestText.classList.add("interest__text--odd");
//   return interestText;
// };

// const createInterestTitle = (title) => {
//   const interestTitle = document.createElement("h3");
//   interestTitle.classList.add("interest__title");
//   interestTitle.textContent = title;
//   return interestTitle;
// };

// const createInterestDescription = (description) => {
//   const interestDescription = document.createElement("p");
//   interestDescription.classList.add("interest__description");
//   interestDescription.textContent = description;
//   return interestDescription;
// };

// displayInterestsData(interestsData);

// (function ($) {
//   /**
//    * Copyright 2012, Digital Fusion
//    * Licensed under the MIT license.
//    * http://teamdf.com/jquery-plugins/license/
//    *
//    * @author Sam Sehnert
//    * @desc A small plugin that checks whether elements are within
//    *     the user visible viewport of a web browser.
//    *     only accounts for vertical position, not horizontal.
//    */

//   $.fn.visible = function (partial) {
//     var $t = $(this),
//       $w = $(window),
//       viewTop = $w.scrollTop(),
//       viewBottom = viewTop + $w.height(),
//       _top = $t.offset().top,
//       _bottom = _top + $t.height(),
//       compareTop = partial === true ? _bottom : _top,
//       compareBottom = partial === true ? _top : _bottom;

//     return compareBottom <= viewBottom && compareTop >= viewTop;
//   };
// })(jQuery);

// var win = $(window);

// var allMods = $(".module");

// allMods.each(function (i, el) {
//   var el = $(el);
//   if (el.visible(true)) {
//     el.addClass("already-visible");
//   }
// });

// win.scroll(function (event) {
//   allMods.each(function (i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in");
//     }
//   });
// });
