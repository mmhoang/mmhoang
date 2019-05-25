/*
Portfolio - 2019 - MH
*/

// Smooth scrolling
// Solution from https://codepen.io/anon/pen/pYzezm
$(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 875, function() {
                    target.focus();
                });
                location.hash = event.currentTarget.hash;
                return false;
            }
        }
    });
});

// Handles onscroll functionality
window.onscroll = function() {
    toggleTopButton()
};

// Toggles the display of the 'Top' button after scrolling downward
function toggleTopButton() {
    var scrollMargin = 20;
    if (document.body.scrollTop > scrollMargin || document.documentElement.scrollTop > scrollMargin) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// Scrolls to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
