$(document).ready(function() {

    // All credit for smooth scrolling code goes to https://css-tricks.com/snippets/jquery/smooth-scrolling/
    // Select all links with hashes
    $("a[href*='#']")
        // Remove links that don"t actually link to anything
        .not("[href='#artificial-intelligence']")
        .not("[href='#algorithms-data']")
        .not("[href='#programming-lab']")
        .not("[href='#other']")
        .click(function(event) {
            // On-page links
            if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
                location.hostname === this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $("html, body").animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus"
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(':focus')) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    // For keeping dropdown-toggle gray when clicking on dropdown-items
    $(".dropdown-item").focus(function() {
        $(".dropdown-toggle").css("background-color", "var(--dark-gray)");
    });

    $(".dropdown-item").on("click", function() {
        $(".dropdown-toggle").css("background-color", "var(--dark-gray)");
    })
});