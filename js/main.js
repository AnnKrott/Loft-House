// Nav-icon

const navBtn = document.querySelector('.nav-icon-btn'),
    navIcon = document.querySelector('.nav-icon'),
    nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
}