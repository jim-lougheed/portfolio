document.querySelector(".navbar-toggler").addEventListener("click", () => {
  console.log("test");
  document.querySelector(".navbar").style.flexDirection = "column";
  document.getElementById("navbar-nav").style.display = "flex";
});
