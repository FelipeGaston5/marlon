// let galeria = 0;
// const slides =document.querySelectorAll('.carrosel-img');

// function showSlide(i){
//     galeria += i;
//     if(galeria>= slides.length) galeria = 0;
//     if(galeria < 0) galeria = slides.length -1;

//     document.querySelector('.carrosel-slide').style.transform = `translateX(${-galeria * 100}%)`;
// }

// function moveslide(i){
//     showSlide(i);
// }

// setInterval(() => moveslide(1), 3000); 

// document.getElementsByClassName('prev')[0].addEventListener('click', () => moveslide(-1));
// document.getElementsByClassName('next')[0].addEventListener('click', () => moveslide(1));// Esse codigo faz o carrosel de imagens




document.addEventListener('DOMContentLoaded', ()=> {
    const Refhtml = document.getElementById('Refhtml');
    const menu = document.getElementById('menu');

    Refhtml.addEventListener('click', (event) =>{
        event.stopPropagation();
        menu.classList.toggle('active');
        menu.classList.toggle('hidden');
    })


    document.addEventListener('click', (event) =>{
        if(!menu.contains(event.target) && !Refhtml.contains(event.target)){
            menu.classList.add('hidden');
        }
    })
})