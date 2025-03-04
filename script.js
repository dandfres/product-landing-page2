// ./index.html
// OCULTAR/MOSTRAR LA BARRA DE NAVEGACION
const menuToggle = document.getElementById('menu-toggle');
const arrowIcon = document.getElementById('arrow-icon');
const mobileMenu = document.getElementById('mobile-menu');

function showHideNav() {
    // muestra/oculta
    mobileMenu.classList.toggle('opacity-100');
    mobileMenu.classList.toggle('scale-y-100'); 
    // refleja v. la flecha
    arrowIcon.classList.toggle('scale-y-[-1]');
};

//  se llama a la funcion cuando se hace
menuToggle.addEventListener('click', showHideNav);

//  verifica si el navbar esta abierto
window.addEventListener('scroll', () => {
    if (mobileMenu.classList.contains('opacity-100')) {
        showHideNav();
    }
});

// ./especificaciones.html
// SELECIONAR EL TAMAÑO DE LA MBA
document.addEventListener('DOMContentLoaded', function() {
    const size13Button = document.getElementById('size-13');
    const size15Button = document.getElementById('size-15');
    const productImage = document.getElementById('product-image');
    
    // resetea, da color al borde y cambia la imagen del boton selecionado
    function selectSize(sizeButton, imagePath) {
        size13Button.classList.remove('border-blue-600');
        size15Button.classList.remove('border-blue-600');

        size13Button.classList.add('border-gray-300');
        size15Button.classList.add('border-gray-300');

        sizeButton.classList.remove('border-gray-300');
        
        sizeButton.classList.add('border-blue-600');
        
        productImage.src = imagePath;
    }

    // se llama a la funcion cuando selecionan 13"
    size13Button.addEventListener('click', function() {
        selectSize(size13Button, './assets/images/size_13_hero_small.jpg');
    });
    
    // se llama a la funcion cuando selecionan 15"
    size15Button.addEventListener('click', function() {
        selectSize(size15Button, './assets/images/size_15_hero_small.jpg');
    });
    // 13" default
    selectSize(size13Button, './assets/images/size_13_hero_small.jpg')
});