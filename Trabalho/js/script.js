let index = 0;
const slides =document.querySelectorAll('.carrosel-img');

function showSlide(i){
    index += i;
    if(index>= slides.length) index =0;
    if(index < 0) index = slides.length -1;

    document.querySelector('.carrosel-slide').style.transform = `translateX(${-index * 100}%)`;
}

function moveslide(i){
    showSlide(i);
}

setInterval(() => moveslide(1), 3000);