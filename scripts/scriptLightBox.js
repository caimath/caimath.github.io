// Effet lightbox pour toutes les images de la classe equipe-membre
const profilePhotos = document.querySelectorAll(".equipe-membre img");

// Crée la lightbox
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

const lightboxContent = document.createElement("div");
lightboxContent.classList.add("lightbox-content");
lightbox.appendChild(lightboxContent);

const lightboxImage = document.createElement("img");
lightboxContent.appendChild(lightboxImage);

// Ouvre la lightbox au clic sur une image
profilePhotos.forEach((photo) => {
    photo.addEventListener("click", () => {
        if (photo.id === "robin") return;
        
        lightboxImage.src = photo.src;
        lightbox.style.display = "flex";
        
    });
});

// Ferme la lightbox en cliquant en dehors de l'image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Ferme la lightbox avec la touche Échap
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.style.display = "none";
    }
});