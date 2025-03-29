document.addEventListener('DOMContentLoaded', () => {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menuLinks = document.querySelector('.menu-links');

  hamburgerIcon.addEventListener('click', toggleMenu);

  function toggleMenu() {
    menuLinks.classList.toggle('open');
    hamburgerIcon.classList.toggle('open');
  }

  // Optional: Close menu when a link is clicked
  document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', toggleMenu);
  });
});