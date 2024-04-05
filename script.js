const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

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
