var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");

listLink.addEventListener("click", function() {
  homeView.classList.add("hidden");
  addView.classList.add("hidden");
  listView.classList.remove("hidden");
  listView.classList.add("visible");
});