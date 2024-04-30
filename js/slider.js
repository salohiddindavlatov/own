document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.image img');
    var currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'block';
    }

    setInterval(showNextImage, 2000); // Переключать изображения каждые 3 секунды
});
