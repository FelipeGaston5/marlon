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