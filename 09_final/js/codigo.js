// console.log('funcionaaaaaaaaaaaaaaa');

// NAV
const btnMenu = document.querySelector('.nav__icons--iconMenu');
const menu = document.querySelector('.nav__box');

const btnSubMenu = document.querySelector('.btnSubmenu');
const subMenu = document.querySelector('.nav__box__menu__item__subMenu');

btnMenu.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('click');
    // menu.classList.toggle('active');
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
        menu.style.height = '0';
        subMenu.style.height = '0';
    }
    else{
        menu.classList.add('active');
        menu.style.height = '189px';
    }
});

btnSubMenu.addEventListener('click', e => {
    e.preventDefault();
    // console.log('click');
    if(subMenu.classList.contains('active')){
        subMenu.classList.remove('active');
        subMenu.style.height = '0';
        menu.style.height = '189px';
    }
    else{
        subMenu.classList.add('active');
        subMenu.style.height = '252px';
        menu.style.height = '441px';
    }
})

Array(subMenu.children).forEach(item => {
    console.log(item.offsetHeight)
})