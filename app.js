const base = document.querySelector('#mobile-menu');
const baseLinks = document.querySelector('.navbar__menu');
const navbarLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
    base.classList.toggle('is-active');
    baseLinks.classList.toggle('active');
}

base.addEventListener('click', mobileMenu);

// Show's the active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('#projects-page');
    let scrollPos = window.scrollY;
    // console.log(scrollPos);

    // adds 'highlight' class  to my menu items

    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Helps close the mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
        menuBars.classList.toggle('is-active');
        baseLinks.classList.remove('active');
    }
}
baseLinks.addEventListener('click', hideMobileMenu);
navbarLogo.addEventListener('click', hideMobileMenu);