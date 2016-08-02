var homeLink = document.getElementById("link-home");
var homeView = document.getElementById("home-view");

homeLink.addEventListener("click", function() {
  addView.classList.add("hidden");
  homeView.classList.add("visible");
  homeView.classList.remove("hidden");
});