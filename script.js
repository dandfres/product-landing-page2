document.addEventListener('DOMContentLoaded', function() {
    const size13Button = document.getElementById('size-13');
    const size15Button = document.getElementById('size-15');
    const productImage = document.getElementById('product-image');

    function selectSize(sizeButton, imagePath) {
        size13Button.classList.remove('border-blue-600');
        size15Button.classList.remove('border-blue-600');

        size13Button.classList.add('border-gray-300');
        size15Button.classList.add('border-gray-300');

        sizeButton.classList.remove('border-gray-300');

        sizeButton.classList.add('border-blue-600');
        
        productImage.src = imagePath;
    }

    size13Button.addEventListener('click', function() {
        selectSize(size13Button, './assets/images/size_13_hero_small.jpg');
        
    });
    size15Button.addEventListener('click', function() {
        selectSize(size15Button, './assets/images/size_15_hero_small.jpg');
    });
    
    selectSize(size13Button, './assets/images/size_13_hero_small.jpg')
});