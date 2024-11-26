document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const aboutSection = document.querySelector("#about");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          navbar.style.top = "0";
          navbar.style.opacity = "1";
        } else {
          navbar.style.top = "-80px";
          navbar.style.opacity = "0";
        }
      });
    },
    { root: null, threshold: 0.5 }
  );

  observer.observe(aboutSection);

  // Lightbox Logic
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  window.openLightbox = (img) => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  };

  window.closeLightbox = () => {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  };
});
