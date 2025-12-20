// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  // Toggle Nav
  nav.classList.toggle('nav-active');

  // Burger Animation
  burger.classList.toggle('toggle');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  });
});

// Scroll Animations using Intersection Observer
const observerOptions = {
  threshold: 0.2, // Trigger when 20% of the element is visible
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Select all elements with the 'hover-reveal' class (renaming to reveal-on-scroll for clarity in JS, but using class from HTML)
// Actually in HTML I used 'hover-reveal' for sections/containers to fade in.
// Let's ensure CSS matches. I added .hidden and .show in CSS, but need to add .hidden initially to elements I want to reveal.
// Wait, I didn't add .hidden to HTML elements yet. I should add a script to add it, or better yet, handling it here.

const scrollElements = document.querySelectorAll('.hover-reveal'); // Using the class I added to HTML sections

scrollElements.forEach((el) => {
  el.classList.add('hidden'); // Add hidden class via JS to ensure they are visible if JS fails/not loaded
  observer.observe(el);
});

// Add hidden class to 'project-card' and other elements we want to animate individually if they aren't covered by parent
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((el) => {
  el.classList.add('hidden');
  observer.observe(el);
});


// Navbar Scroll Effect (Optional: add shadow on scroll)
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
