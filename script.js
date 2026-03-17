// Typing Animation
const typingElement = document.getElementById('typing');
const phrases = ["Cloud Computing Student", "Web Developer", "Open Source Enthusiast"];
let i = 0;
let j = 0;
let currentPhrase = '';
let isDeleting = false;

function type() {
  if (i >= phrases.length) i = 0;
  currentPhrase = phrases[i];

  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, j--);
  } else {
    typingElement.textContent = currentPhrase.substring(0, j++);
  }

  if (!isDeleting && j === currentPhrase.length + 1) {
    isDeleting = true;
    setTimeout(type, 1500); // pause at end
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i++;
  }

  setTimeout(type, isDeleting ? 50 : 150);
}

type();
// Hamburger Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Theme Toggle
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});
