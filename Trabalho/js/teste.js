// Exemplo: Mostra/oculta o menu com base no scroll
window.addEventListener('scroll', () => {
    const menu = document.getElementById('floatingMenu');
    if (window.scrollY > 100) {
        menu.style.opacity = '1';
    } else {
        menu.style.opacity = '0.5';
    }
});

// Exemplo de animação ou comportamento personalizado
