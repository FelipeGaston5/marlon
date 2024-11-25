// document.addEventListener('DOMContentLoaded', ()=> {
//     const Refhtml = document.getElementById('Refhtml');
//     const menu = document.getElementById('menu');

//     Refhtml.addEventListener('click', (event) =>{
//         event.stopPropagation();
//         menu.classList.toggle('active');
//         menu.classList.toggle('hidden');
//     });


//     document.addEventListener('click', (event) =>{
//         if(!menu.contains(event.target) && !Refhtml.contains(event.target)){
//             menu.classList.add('hidden');
//         }
//     })
// });

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


// menu Hamburguer
        const toggleButton = document.getElementById('menu-toggle');
        const menuDropdown = document.getElementById('menu-dropdown');

        toggleButton.addEventListener('click', () => {
            // Alterna as classes para animar e abrir o menu
            toggleButton.classList.toggle('active');
            menuDropdown.classList.toggle('open');
            
        });
        document.addEventListener('click', (event) => {
        const isClickInsideMenu = menuDropdown.contains(event.target) || toggleButton.contains(event.target);
        
        if (!isClickInsideMenu) {
        toggleButton.classList.remove('active');
        menuDropdown.classList.remove('open');
    }})
    
// Aumentar e Diminuir fonte
const root = document.documentElement;
        const padraofonte= 16;
        let Fonte = padraofonte;

        function aumentarfonte(){
            if (Fonte < 24){    
            Fonte += 2;
            root.style.setProperty('--base-fonte', `${Fonte}px`);
        }
    }
        function Diminuirfonte() {
            if (Fonte > 13){ 
                Fonte -= 2;
                root.style.setProperty('--base-fonte', `${Fonte}px`);
            }
        }
        document.getElementById('aumentarfonte').addEventListener('click', aumentarfonte);
        document.getElementById('Diminuirfonte').addEventListener('click', Diminuirfonte);

        