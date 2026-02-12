// Enhanced functionalities for the website

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('is-active');
});

// Smooth scrolling for anchor links
const smoothScroll = (target) => {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Form handling
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Perform form validation and AJAX request here
    // Example: console.log(form.elements['name'].value);
});

// Scroll animations using Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }  
    });
});

document.querySelectorAll('.scroll-animate').forEach(section => {
    observer.observe(section);
});

// Active navigation link styling
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
    let current = '';
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = link.getAttribute('href');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
});