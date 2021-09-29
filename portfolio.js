var hasVisited = sessionStorage.getItem("washere");

if (!hasVisited) {
  sessionStorage.setItem("washere", true);
} else {
  $("html,body").scrollTop(0);
}
