
// --- Логин (модальное окно) ---
const openModal = document.getElementById('openModal');
const modal = document.getElementById('modal');

if (openModal && modal) {
    openModal.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
}

// --- Валидация формы заявки ---
const form = document.getElementById('applicationForm');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const inputs = form.querySelectorAll('input, textarea');
        let isValid = true;

        inputs.forEach(input => {
            input.style.border = 'none';
            if (!input.value.trim()) {
                input.style.border = '2px solid red';
                isValid = false;
            }
            if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                input.style.border = '2px solid red';
                isValid = false;
            }
        });

        if (!isValid) {
            alert('Lūdzu, aizpildiet visus laukus pareizi!');
        } else {
            alert('Forma ir aizpildīta pareizi. (Darbība nav piesaistīta sūtīšanai)');
        }
    });
}

// --- Галерея: Lightbox для изображений ---
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentIndex = 0;

if (galleryItems.length && lightbox && lightboxImg) {
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
            currentIndex = index;
        });
    });

    window.closeLightbox = function () {
        lightbox.style.display = 'none';
    };

    window.prevImage = function () {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        lightboxImg.src = galleryItems[currentIndex].src;
    };

    window.nextImage = function () {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        lightboxImg.src = galleryItems[currentIndex].src;
    };

    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'Escape') closeLightbox();
        }
    });
}
