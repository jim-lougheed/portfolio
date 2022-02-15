import interestsData from "./data.js";

// document.querySelector(".navbar-toggler").addEventListener("click", () => {
//   console.log("test");
//   document.querySelector(".navbar").style.flexDirection = "column";
//   document.getElementById("navbar-nav").style.display = "flex";
// });
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
const carouselInner = document.querySelector(".carousel-inner");

const displayInterestsData = (data) => {
  data.map((interest, i) => {
    const { image, altText, title, description } = interest;

    const carouselItem = createCarouselItem(i);
    const interestImage = createInterestImage(image, altText);
    const interestText = createInterestText(i);
    const interestItem = createInterestItem(i);

    interestText.appendChild(createInterestTitle(title));
    interestText.appendChild(createInterestDescription(description));

    interestItem.appendChild(interestImage);
    interestItem.appendChild(interestText);

    carouselItem.appendChild(interestItem);

    carouselInner.appendChild(carouselItem);
  });
};

const createCarouselItem = (i) => {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");
  i === 0 && carouselItem.classList.add("active");
  return carouselItem;
};

const createInterestItem = (i) => {
  const interestItem = document.createElement("div");
  interestItem.classList.add("interest__item");
  i % 2 === 0
    ? interestItem.classList.add("interest__item--even")
    : interestItem.classList.add("interest__item--odd");
  return interestItem;
};

const createInterestImage = (image, altText) => {
  const interestImage = document.createElement("img");
  interestImage.classList.add("interest__image");
  interestImage.setAttribute("src", image);
  interestImage.setAttribute("alt", altText);
  return interestImage;
};

const createInterestText = (i) => {
  const interestText = document.createElement("div");
  interestText.classList.add("carousel-caption");
  interestText.classList.add("d-md-block");
  interestText.classList.add("interest__text");
  i % 2 === 0
    ? interestText.classList.add("interest__text--even")
    : interestText.classList.add("interest__text--odd");
  return interestText;
};

const createInterestTitle = (title) => {
  const interestTitle = document.createElement("h3");
  interestTitle.classList.add("interest__title");
  interestTitle.textContent = title;
  return interestTitle;
};

const createInterestDescription = (description) => {
  const interestDescription = document.createElement("p");
  interestDescription.classList.add("interest__description");
  interestDescription.textContent = description;
  return interestDescription;
};

displayInterestsData(interestsData);

(function ($) {
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function (partial) {
    var $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function (i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible");
  }
});

win.scroll(function (event) {
  allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });
});
