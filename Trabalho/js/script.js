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



let carrossel = 0;
const cur = documentquerySelectorAll('.curG');

function showCur(c){
    G += c;
    if(G >= cur.length) cur = 0;
    if(G < 0) G = cur.length -1;

    document.querySelector('.cur').style.transform = `translateX(${-G * 100}%)`;
    
}
function moverCur(c){
    showCur(c);
}

document.getElementsByClassName('prev')[0].addEventListener('click', () => showCur(-1));
document.getElementsByClassName('next')[0].addEventListener('click', () => showCur(1));
