// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button - Ensure you add a button with a class '.back-to-top' in your HTML
document.querySelector('.back-to-top').addEventListener('click', function(e) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("backToTopBtn").addEventListener('click', function(e) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});