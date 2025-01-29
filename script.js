document.addEventListener("DOMContentLoaded", function () {
    // Load header
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header").innerHTML = data);

    // Load footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});
const pageTitles = {
    "index.html": "Home - Tamil Treasures",
    "temples.html": "Temples - Tamil Treasures",
    "artdance.html": "Art and Dance - Tamil Treasures",
    "festivals.html": "Festivals - Tamil Treasures",
    "gallery.html": "Gallery - Tamil Treasures"
};

const filename = window.location.pathname.split("/").pop();
document.title = pageTitles[filename] || "Tamil Treasures";