let galeria = 0;
const slides =document.querySelectorAll('.carrosel-img');

function showSlide(i){
    galeria += i;
    if(galeria>= slides.length) galeria = 0;
    if(galeria < 0) galeria = slides.length -1;

    document.querySelector('.carrosel-slide').style.transform = `translateX(${-galeria * 100}%)`;
}

function moveslide(i){
    showSlide(i);
}

setInterval(() => moveslide(1), 3000); 

document.getElementsByClassName('prev')[0].addEventListener('click', () => moveslide(-1));
document.getElementsByClassName('next')[0].addEventListener('click', () => moveslide(1));// Esse codigo faz o carrosel de imagens



document.querySelector('.dropdown-btn').addEventListener('click', function () {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

// Fechar o menu clicando fora
window.addEventListener('click', function (e) {
    if (!e.target.matches('.dropdown-btn')) {
        const dropdowns = document.querySelector('.dropdown-content');
        if (dropdowns) dropdowns.style.display = 'none';
    }
});
