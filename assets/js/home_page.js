

$(document).ready(function() {
    $(".home>.main>section>button").click(function() {
        var aboutSection = $(".about");

        // Scroll to the about section
        $("html, body").animate({
            scrollTop: aboutSection.offset().top
        }, 800); // You can adjust the animation duration (1000 milliseconds = 1 second)
    });
});
