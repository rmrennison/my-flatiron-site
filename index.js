const images = document.querySelectorAll(".block img");

images.forEach(function (image) {
    image.addEventListener("mouseover", function () {
        this.classList.add('active');
    });
    image.addEventListener("mouseout", function () {
        this.classList.remove('active');
    });
});