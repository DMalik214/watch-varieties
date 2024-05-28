const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

const bubblesContainer = document.getElementById('bubbles-container');

document.addEventListener('mousemove', (e) => {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${e.clientX}px`;
    bubble.style.top = `${e.clientY}px`;
    bubblesContainer.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 2000);
});

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
