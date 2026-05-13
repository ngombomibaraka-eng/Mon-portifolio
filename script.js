// Manipulation des menus

const menu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#nav-links');

    menu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menu.classList.toggle('is-active');
    });

    // Fermer le menu lors du clic sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menu.classList.remove('is-active');
        });
    });
    