//  ./index.html
//  OCULTAR/MOSTRAR LA BARRA DE NAVEGACION
const menuToggle = document.getElementById('menu-toggle');
const arrowIcon = document.getElementById('arrow-icon');
const mobileMenu = document.getElementById('mobile-menu');

function showHideNav() {
    //  muestra/oculta
    mobileMenu.classList.toggle('opacity-100');
    mobileMenu.classList.toggle('scale-y-100'); 
    //  refleja v. la flecha
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


//  ./especificaciones.html
//  SELECIONAR EL TAMAÑO DE LA MBA
document.addEventListener('DOMContentLoaded', function() {
    const size13Button = document.getElementById('size-13');
    const size15Button = document.getElementById('size-15');
    const productImage = document.getElementById('product-image');
    //  resetea, da color al borde y cambia la imagen del boton selecionado
    function selectSize(sizeButton, imagePath) {
        size13Button.classList.remove('border-blue-600');
        size15Button.classList.remove('border-blue-600');

        size13Button.classList.add('border-gray-300');
        size15Button.classList.add('border-gray-300');

        sizeButton.classList.remove('border-gray-300');
        
        sizeButton.classList.add('border-blue-600');
        
        productImage.src = imagePath;
    }
    //  se llama a la funcion cuando selecionan 13"
    size13Button.addEventListener('click', function() {
        selectSize(size13Button, './assets/images/size_13_hero_small.jpg');
    });
    //  se llama a la funcion cuando selecionan 15"
    size15Button.addEventListener('click', function() {
        selectSize(size15Button, './assets/images/size_15_hero_small.jpg');
    });
    //  13" default
    selectSize(size13Button, './assets/images/size_13_hero_small.jpg')
});


//  ./valoraciones.html
//  toma y regreso del form
let formData = document.getElementById('review-form');
    //  evitar que recargue la pagina cuando se recibe el submit
formData.addEventListener('submit', function(event) {
    event.preventDefault();
    //  se obtiene los datos de los input
    let userName = document.getElementById('name').value;
    let deviceSize = document.querySelector('input[name="size-option"]:checked').value;
    let deviceColor = document.querySelector('input[name="color-option"]:checked').value;
    let review = document.getElementById('comment').value;
    //  crear el div donde se mostrara los datos de los input
    let reviewItem = document.createElement("div");
    reviewItem.classList.add("p-4", "border-gray-200", "border-b-1", "rounded-xl", "bg-gray-100", "break-words", "md:p-8");

    reviewItem.innerHTML =`
    <strong>${userName}</strong>
    <p class="font-light text-sm md:text-base">${deviceSize}</p>
    <p class="font-light text-sm md:text-base">${deviceColor}</p>
    <p>${review}</p>
    `;
    //  agregar la reseña final al div creado
    document.getElementById('reviews-container').appendChild(reviewItem);
    //  reseteear el formulario
    document.getElementById('review-form').reset();
});
