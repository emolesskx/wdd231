document.getElementById("menu-button").addEventListener("click", function () {
    const nav = document.getElementById("nav-menu");
    nav.style.display = nav.style.display === "block" ? "none" : "block";
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");

    menuButton.addEventListener("click", function () {
        if (menuButton.textContent === "☰") {
            menuButton.textContent = "✖"; // Change to 'X'
        } else {
            menuButton.textContent = "☰"; // Change back to ☰
        }
    });
});
