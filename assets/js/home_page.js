const navItems = document.getElementsByClassName('nav_items');

// Loop through the elements and add an event listener to each
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('mouseenter', () => {
        navItems[i].style.cursor = 'pointer'; // You can use any cursor type you prefer
    });
}
$(document).ready(function () {
    $(".home>.main>section>button").click(function () {
        var aboutSection = $(".about");

        // Scroll to the about section
        $("html, body").animate({
            scrollTop: aboutSection.offset().top
        }, 800); // You can adjust the animation duration (1000 milliseconds = 1 second)
    });
});


$(document).ready(function () {
    $("header>nav>ol>li:first-child").click(function () {
        var aboutSection = $(".home");

        // Scroll to the about section
        $("html, body").animate({
            scrollTop: aboutSection.offset().top
        }, 800); // You can adjust the animation duration (1000 milliseconds = 1 second)
    });
});
$(document).ready(function () {
    $("header>nav>ol>li:nth-child(2)").click(function () {
        var aboutSection = $(".about");

        // Scroll to the about section
        $("html, body").animate({
            scrollTop: aboutSection.offset().top
        }, 800); // You can adjust the animation duration (1000 milliseconds = 1 second)
    });
});
$(document).ready(function () {
    $("header>nav>ol>li:nth-child(3)").click(function () {
        var aboutSection = $(".project");

        // Scroll to the about section
        $("html, body").animate({
            scrollTop: aboutSection.offset().top
        }, 800); // You can adjust the animation duration (1000 milliseconds = 1 second)
    });
});
$(document).ready(function () {
    $("header>nav>ol>li:nth-child(4)").click(function () {
        var aboutSection = $(".gallery");

        // Scroll to the about section
        $("html, body").animate({
            scrollTop: aboutSection.offset().top
        }, 800); // You can adjust the animation duration (1000 milliseconds = 1 second)
    });
});
$(document).ready(function () {
    $("header>nav>ol>li:nth-child(5)").click(function () {
        var aboutSection = $(".contact");

        // Scroll to the about section
        $("html, body").animate({
            scrollTop: aboutSection.offset().top
        }, 800); // You can adjust the animation duration (1000 milliseconds = 1 second)
    });
});



