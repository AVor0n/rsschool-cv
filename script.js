const menuBtn = document.querySelector('.nav__burger-menu');
const menu = document.querySelector('.nav');
const body = document.querySelector('body');
const links = document.querySelectorAll('.nav__link')

function showMenu() {
    menu.style.top = 0;
    body.classList.add('body-lock')
}

function hadeMenu() {
    menu.style.top = '-100vh';
    body.classList.remove('body-lock')
}

menuBtn.addEventListener('click', showMenu)

for (const link of links) {
    link.addEventListener('click', () => {
        hadeMenu();
        const id = link.getAttribute('href').slice(1);
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    })
}
