document.addEventListener('DOMContentLoaded', () => {
    const carouselContent = document.querySelector('.carousel-content');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const cardWidth = document.querySelector('.poem-card').offsetWidth + 20; // including margin

    let currentIndex = 0;
    const totalCards = document.querySelectorAll('.poem-card').length;
    const maxIndex = totalCards - 1;

    function updateCarousel() {
        const offset = -currentIndex * cardWidth;
        carouselContent.style.transform = `translateX(${offset}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex;
        }
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });
});
