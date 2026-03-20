// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

menuToggle.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('nav-active');

    // Burger Animation
    menuToggle.classList.toggle('toggle-active');
});

// Close mobile menu when link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            menuToggle.classList.remove('toggle-active');
        }
    });
});

// Scroll Reveal Animation using Intersection Observer
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Header scroll hide/show logic
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down, hide header
    if (scrollTop > lastScrollTop && scrollTop > 80) {
        header.style.transform = 'translateY(-100%)';
    } else {
        // If scrolling up, show header
        header.style.transform = 'translateY(0)';
    }

    // Add shadow when not at top
    if (scrollTop > 10) {
        header.style.boxShadow = '0 10px 30px -10px rgba(2, 12, 27, 0.7)';
        header.style.background = 'rgba(10, 25, 47, 0.85)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = 'transparent';
    }

    lastScrollTop = scrollTop;
});
