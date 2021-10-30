const header = document.querySelector('.header');
const navToggleBtn = document.querySelector('.nav-menu-toggler');
const navContent = document.querySelector('.nav-menu-content');
const navOverlay = document.querySelector('.nav-menu-overlay');
const navLinks = document.querySelectorAll('.nav-menu-content ul a');
const navSearchBtn = document.querySelector('.nav-search');

/// header 
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
    console.log('scrolling');
});

if (window.scrollY > 100) {
    header.classList.add('header-scrolled');
}


/// Mobile navigation 
let isNavOpen = false;

const openNavigation = () => {
    navToggleBtn.classList.add('active');
    navContent.classList.add('open');
    navOverlay.classList.add('open');
    isNavOpen = true;
}

const closeNavigation = () => {
    navToggleBtn.classList.remove('active');
    navContent.classList.remove('open');
    navOverlay.classList.remove('open');
    isNavOpen = false;
}

navToggleBtn.addEventListener('click', () => {
    if (!isNavOpen) {
        openNavigation();
    } else {
        closeNavigation();
    }
});

navOverlay.addEventListener('click', () => {
    closeNavigation();
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        closeNavigation();
    });
})

navSearchBtn.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT') {
        return;
    }
    navSearchBtn.classList.toggle('open');
})
// End Mobile navigation

