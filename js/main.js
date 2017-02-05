// Animates page load
$(document).ready(function () {
    $("div.hidden").fadeIn(1500).removeClass("hidden");
});

// Initializes tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Places tooltip
$(".icon").tooltip({placement:"bottom", delay:100});

// Closes the sidebar menu
$("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});

// Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 900);
                return false;
            }
        }
    });
});

// Trigger animation when scrolled into view
$(function () {
    var $window = $(window);
    $window.on("scroll", reveal);
    function reveal() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height();
        $(".reveal:not(.animated)").each(function () {
            var $this = $(this),
                offsetTop = $this.offset().top;
            if (scrolled + win_height_padded > offsetTop) {
                if ($this.data("timeout")) {
                    window.setTimeout(function () {
                        $this.addClass("animated " + $this.data("animation"));
                    }, parseInt($this.data("timeout"), 10));
                } else {
                    $this.addClass("animated " + $this.data("animation"));
                }
            }
        });
    }
    reveal();
});