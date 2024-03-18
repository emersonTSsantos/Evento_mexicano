AOS.init();

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselInner = carousel.querySelector('.carousel__inner');
    const prevButton = carousel.querySelector('.carousel__prev');
    const nextButton = carousel.querySelector('.carousel__next');

    let currentIndex = 0;
    const images = carouselInner.querySelectorAll('img');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    showImage(currentIndex);

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    });
});