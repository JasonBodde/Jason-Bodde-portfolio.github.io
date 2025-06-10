// Portfolio Website Animations

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.card, .about-me, .homepagina');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate-in');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', animateOnScroll);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
}); 