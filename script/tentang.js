// Script Burger Menu
function myFunction() {
    var x = document.getElementById("wrap-burger-menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Nav
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.getElementById("nav");


    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            nav.className.add("nav-scrolled");
            nav.className.remove("nav-top");
        } else {
            nav.className.remove("nav-scrolled");
            nav.className.add("nav-top");
        }
    });
});