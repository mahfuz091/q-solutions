// Check if an element with the class "sticky-header" exists
const stickyHeaders = document.querySelectorAll('.sticky-header');

if (stickyHeaders.length > 0) {
    // For each element found with the class "sticky-header"
    stickyHeaders.forEach(stickyHeader => {
        // Clone the element
        const clonedHeader = stickyHeader.cloneNode(true);
        // Add the class "sticky-header--cloned" to the cloned element
        clonedHeader.classList.add('sticky-header--cloned');
        // Insert the cloned element after the original element
        stickyHeader.parentNode.insertBefore(clonedHeader, stickyHeader.nextSibling);
    });
}

window.addEventListener("scroll", function () {
    // Check if element with class .sticky-header--cloned exists
    var stickyHeader = document.querySelector(".sticky-header--cloned");
    if (stickyHeader) {
        var headerScrollPos = 130;

        // Check scroll position to add or remove class .sticky-fixed
        if (window.pageYOffset > headerScrollPos) {
            stickyHeader.classList.add("sticky-fixed");
        } else {
            stickyHeader.classList.remove("sticky-fixed");
        }
    }

    // Check if element with class .scroll-to-top exists
    var scrollToTop = document.querySelector(".scroll-to-top");
    if (scrollToTop) {
        var scrollToTopScrollPos = 100;

        // Fade in or out based on scroll position
        if (window.pageYOffset > scrollToTopScrollPos) {
            fadeIn(scrollToTop, 500);
        } else {
            fadeOut(scrollToTop, 500);
        }
    }
});

