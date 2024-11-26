// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbarLinks = document.querySelector('.navbar-links');

hamburger.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Certificate Modal Open/Close
function openModal(imgSrc) {
  const modal = document.getElementById('cert-modal');
  const certImage = document.getElementById('cert-image');
  certImage.src = imgSrc;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('cert-modal');
  modal.style.display = 'none';
}
