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