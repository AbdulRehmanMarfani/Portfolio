// Function to toggle the navigation menu
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Function to close the navigation menu
function closeMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('active');
}

// Function to open the modal with the certificate image
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = "flex"; // Use flex to center the modal content
    modalImg.src = imageSrc;
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Add event listeners to certificate images to open the modal
const certCards = document.querySelectorAll('.cert-card img');
certCards.forEach((img) => {
    img.addEventListener('click', () => {
        openModal(img.src);
    });
});

// Close the modal when the close button is clicked
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', closeModal);

// Close the modal when clicking outside of the image
const modal = document.getElementById('modal');
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
