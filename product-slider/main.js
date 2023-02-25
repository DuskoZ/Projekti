var navLinks = document.querySelectorAll(".slider .nav-link");
var slides = document.querySelectorAll(".slider .slides img");
var overlays = document.querySelectorAll(".slider .bar");
var maxZIndex = navLinks.length;
var easeInOutQuart = "cubic-bezier(0.77, 0, 0.175, 1)";
slides[0].classList.add("active");
navLinks[0].classList.add("active");

navLinks.forEach(function (navLink, activeIndex) {
    overlays[activeIndex].style.zIndex = "".concat(
        navLinks.length - activeIndex
    );
    navLink.addEventListener("click", function () {
        // nav-link
        navLinks.forEach(function (navLink) {
            return navLink.classList.remove("active");
        });
        navLink.classList.add("active");
        // slide
        var currentSlide = document.querySelector(".slider .slides img.active");
        var slideFadeOut = currentSlide.animate(
            [
                { transform: "translateX(0)", opacity: 1 },
                { transform: "translateX(5%)", opacity: 0 },
            ],
            {
                duration: 600,
                easing: "ease-in",
                fill: "forwards",
            }
        );
    });
});
