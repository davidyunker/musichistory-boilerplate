var homeLink = document.getElementById("link-home");
var homeView = document.getElementById("home-view");

homeLink.addEventListener("click", function() {
   homeView.classList.remove("hidden");
  homeView.classList.add("visible");
  addView.classList.add("hidden");
  linkView.classList.add("hidden");

});