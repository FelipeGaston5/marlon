document.addEventListener('DOMContentLoaded', ()=> {
    const Refhtml = document.getElementById('Refhtml');
    const menu = document.getElementById('menu');

    Refhtml.addEventListener('click', (event) =>{
        event.stopPropagation();
        menu.classList.toggle('active');
        menu.classList.toggle('hidden');
    });


    document.addEventListener('click', (event) =>{
        if(!menu.contains(event.target) && !Refhtml.contains(event.target)){
            menu.classList.add('hidden');
        }
    })
});

const trilho = document.querySelector('.trilho');
const body = document.body;
const button = document.querySelector('#button');

trilho.addEventListener('click', () => {
    body.classList.toggle('dark');
});

button.addEventListener('click', (event) =>{
    event.stopPropagation();
    body.classList.toggle('dark');
});